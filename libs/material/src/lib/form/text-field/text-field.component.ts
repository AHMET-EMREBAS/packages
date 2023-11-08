import { Component } from '@angular/core';
import {
  CommonFieldComponent,
  CommonFieldModule,
} from '../common-field/common-field.component';

@Component({
  selector: 'techbir-text-field',
  standalone: true,
  imports: [CommonFieldModule],
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss'],
})
export class TextFieldComponent extends CommonFieldComponent {}
