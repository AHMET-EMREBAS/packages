import { Component } from '@angular/core';

import { MatSliderModule } from '@angular/material/slider';
import { CommonFieldComponent, CommonFieldModule } from '../common-field';

@Component({
  selector: 'techbir-slider-field',
  standalone: true,
  imports: [CommonFieldModule, MatSliderModule],
  templateUrl: './slider-field.component.html',
  styleUrls: ['./slider-field.component.scss'],
})
export class SliderFieldComponent extends CommonFieldComponent {
  formatLabel(value: number): string {
    return `${value}`;
  }
}
