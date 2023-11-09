import { Component } from '@angular/core';
import { CommonFieldComponent, CommonFieldModule } from '../common-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'techbir-select',
  standalone: true,
  imports: [CommonFieldModule, MatSelectModule],
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent extends CommonFieldComponent {}
