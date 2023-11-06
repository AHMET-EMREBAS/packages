import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {
  CommonFieldComponent,
  CommonFieldModule,
} from '../common-field/common-field.component';
import { combineLatest, debounceTime, map } from 'rxjs';
import '@angular/localize/init';

@Component({
  selector: 'techbir-date-range',
  standalone: true,
  imports: [CommonFieldModule, MatDatepickerModule, MatNativeDateModule],
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
