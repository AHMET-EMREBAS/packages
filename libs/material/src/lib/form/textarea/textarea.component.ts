import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CommonFieldComponent,
  CommonFieldModule,
} from '../common-field/common-field.component';

@Component({
  selector: 'techbir-textarea',
  standalone: true,
  imports: [CommonModule, CommonFieldModule],
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
})
export class TextareaComponent extends CommonFieldComponent {}
