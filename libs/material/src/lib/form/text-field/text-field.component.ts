import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CommonFieldComponent,
  CommonFieldModule,
} from '../common-field/common-field.component';

@Component({
  selector: 'techbir-text-field',
  standalone: true,
  imports: [CommonModule, CommonFieldModule],
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss'],
})
export class TextFieldComponent extends CommonFieldComponent {}
