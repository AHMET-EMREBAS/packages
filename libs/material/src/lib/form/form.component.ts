import { Component, Inject, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ResourceService } from '../api';

@Component({
  selector: 'techbir-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FormComponent {
  private readonly id = new Date().getTime();
  @Input() hideActions = false;

  constructor(
    @Inject(FormGroup) public readonly formGroup: FormGroup,
    private readonly service: ResourceService<unknown>
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
   * FormGroup value
   * @returns
   */
  value() {
    return { ...this.formGroup.value, id: this.id };
  }

  submit() {
    if (this.isFormValid()) {
      console.log('Submitting form ', this.value());
      this.service.addOneToCache(this.value());
    }
  }

  reset() {
    this.formGroup.reset();
    this.formGroup.markAsUntouched();
  }
}
