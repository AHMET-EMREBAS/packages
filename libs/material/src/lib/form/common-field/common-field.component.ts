import {
  Component,
  Inject,
  Input,
  NgModule,
  OnInit,
  Optional,
} from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { FORM_FIELD_APPEARANCE_TOKEN } from '../../api';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { Observable, catchError, map, of } from 'rxjs';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

const formModules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatButtonModule,
];

@NgModule({
  imports: [...formModules],
  exports: [...formModules],
})
export class CommonFieldModule {}

@Component({ template: '' })
export class CommonFieldComponent implements OnInit {
  /**
   * Property name
   */
  @Input() name!: string;

  /**
   * Property label
   */
  @Input() label = '';

  /**
   * Property icon
   */
  @Input() icon = '';

  /**
   * FormControl instance
   */
  control!: AbstractControl;

  constructor(
    @Inject(FormGroup) public readonly formGroup: FormGroup,
    @Optional()
    @Inject(FORM_FIELD_APPEARANCE_TOKEN)
    public readonly appearance: MatFormField['appearance']
  ) {
    if (!appearance) this.appearance = 'outline';
    if (!formGroup) throw new Error('FormGroup must be provided!');
  }

  ngOnInit(): void {
    const foundControl = this.formGroup.get(this.name);

    if (!foundControl) {
      throw new Error(`${this.name} control is not found in formGroup!`);
    }

    this.control = foundControl;
  }

  getErrors() {
    return Object.values(this.control.errors || {}).join(', ');
  }
}
