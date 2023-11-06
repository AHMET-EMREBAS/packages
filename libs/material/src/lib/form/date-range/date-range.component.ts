import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonFieldComponent } from '../common-field/common-field.component';
import { combineLatest, debounceTime, map } from 'rxjs';
import '@angular/localize/init';

@Component({
  selector: 'techbir-date-range',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.scss'],
})
export class DateRangeComponent extends CommonFieldComponent {
  /**
   * @ignore
   */
  __startControl = new FormControl('');

  /**
   * @ignore
   */
  __endControl = new FormControl('');

  updateValue$ = combineLatest([
    this.__startControl.valueChanges,
    this.__endControl.valueChanges,
  ]).pipe(
    debounceTime(400),
    map(([start, end]) => {
      this.formGroup.get(this.name)?.setValue({ start, end });
    })
  );
}
