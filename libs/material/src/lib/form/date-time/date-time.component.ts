import { Component } from '@angular/core';
import {
  CommonFieldComponent,
  CommonFieldModule,
} from '../common-field/common-field.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {} from '@angular/material/core';

@Component({
  selector: 'techbir-date-time',
  standalone: true,
  imports: [CommonFieldModule, MatDatepickerModule, MatNativeDateModule],
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.scss'],
})
export class DateTimeComponent extends CommonFieldComponent {}
