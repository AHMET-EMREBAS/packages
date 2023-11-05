import { Component, Inject, Optional, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FORM_FIELDS_TOKEN, FormField, ResourceService } from '../api';
import { TextFieldComponent } from './text-field/text-field.component';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'techbir-form',
  standalone: true,
  imports: [CommonModule, MatStepperModule, MatButtonModule, MatIconModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FormComponent {
  constructor(
    @Inject(FormGroup) public formGroup: FormGroup,
    @Inject(FORM_FIELDS_TOKEN)
    public formFields: FormField[],
    private service: ResourceService<unknown>
  ) {}

  /**
   * Is form dirth and valid?
   * @returns
   */
  isFormValid() {
    return this.formGroup.dirty && this.formGroup.valid;
  }

  /**
   * Is form invalid or untouched?
   * @returns
   */
  isFormInvalid() {
    return this.formGroup.invalid || this.formGroup.untouched;
  }

  /**
   * Submit form
   */
  submit() {
    if (this.isFormValid()) {
      const formValue = { ...this.formGroup.value };
      this.service.saveItem(formValue);
    }
  }

  reset() {
    this.formGroup.reset();
    this.formGroup.markAsUntouched();
  }
}
