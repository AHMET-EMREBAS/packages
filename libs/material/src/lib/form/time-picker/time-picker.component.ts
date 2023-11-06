import { Component, OnInit } from '@angular/core';
import {
  CommonFieldComponent,
  CommonFieldModule,
} from '../common-field/common-field.component';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup } from '@angular/forms';
import { combineLatest, debounceTime, map } from 'rxjs';
function range(start: number, end: number, step = 1) {
  const n = [];
  for (let i = start; i <= end; i = i + step) {
    n.push(i);
  }
  return n;
}

function slideLeft(arr: any[]) {
  return [arr.pop(), ...arr];
}

@Component({
  selector: 'techbir-time-picker',
  standalone: true,
  imports: [CommonFieldModule, MatButtonModule],
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss'],
})
export class TimePickerComponent extends CommonFieldComponent {
  hour = new FormControl('0');
  minute = new FormControl('0');
  time = new FormControl('pm');
  hours = slideLeft(range(1, 12));
  minutes = range(0, 59, 5);

  valueChange$ = combineLatest([
    this.hour.valueChanges,
    this.minute.valueChanges,
    this.time.valueChanges,
  ]).pipe(
    debounceTime(400),
    map((value) => {
      const [hour, minute, time] = value as any;
      this.formGroup?.get(this.name)?.setValue({ hour, minute, time });
    })
  );

  setHour(h: string) {
    this.hour.setValue(h);
  }

  setMinute(h: string) {
    this.minute.setValue(h);
  }
}
