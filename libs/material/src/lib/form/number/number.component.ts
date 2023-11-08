import { Component } from '@angular/core';
import { CommonFieldComponent, CommonFieldModule } from '../common-field';

@Component({
  selector: 'techbir-number',
  standalone: true,
  imports: [CommonFieldModule],
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss'],
})
export class NumberComponent extends CommonFieldComponent {}
