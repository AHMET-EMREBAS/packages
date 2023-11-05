import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonFieldComponent } from '../common-field/common-field.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'techbir-checkbox',
  standalone: true,
  imports: [CommonModule, MatCheckboxModule],
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent extends CommonFieldComponent {}
