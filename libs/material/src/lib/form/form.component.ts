import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FORM_FIELDS_TOKEN, FormField, ResourceService } from '../api';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { map, tap } from 'rxjs';

@Component({
  selector: 'techbir-form',
  standalone: true,
  imports: [
    CommonModule,
    MatStepperModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FormComponent {
  entityActions$ = this.service.entityActions$.pipe(
    tap((action) => {
      if (action.type.endsWith('success')) {
        this.snack.open($localize`Awesome work!`, 'close', {
          duration: 10000,
          verticalPosition: 'top',
          horizontalPosition: 'center',
        });
      } else if (action.type.endsWith('error')) {
        this.snack.open($localize`Form is invalid!`, 'close', {
          duration: 10000,
          verticalPosition: 'top',
          horizontalPosition: 'center',
        });
      }
    })
  );
  errorMessages$ = this.service.errorMessages$.pipe(
    map((errors) => {
      if (errors?.length > 0) {
        for (const error of errors) {
          this.formGroup.get(error.property)?.setErrors(error.constraints);
        }
      }
    })
  );

  constructor(
    @Inject(FormGroup) public formGroup: FormGroup,
    @Inject(FORM_FIELDS_TOKEN)
    public formFields: FormField[],
    private service: ResourceService<unknown>,
    private snack: MatSnackBar
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
      this.reset();
    }
  }

  reset() {
    this.formGroup.reset();
    this.formGroup.markAsUntouched();
  }
}
