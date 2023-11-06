import { Component } from '@angular/core';
import {
  CommonFieldComponent,
  CommonFieldModule,
} from '../common-field/common-field.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'techbir-date',
  standalone: true,
  imports: [CommonFieldModule, MatDatepickerModule, MatNativeDateModule],
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
})
export class DateComponent extends CommonFieldComponent {}
