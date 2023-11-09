import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonFieldComponent, CommonFieldModule } from '../common-field';

@Component({
  selector: 'techbir-switch',
  standalone: true,
  imports: [CommonFieldModule, MatSlideToggleModule],
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
})
export class SwitchComponent extends CommonFieldComponent {}
