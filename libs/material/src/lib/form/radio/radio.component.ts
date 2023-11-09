import { Component } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { CommonFieldComponent, CommonFieldModule } from '../common-field';

@Component({
  selector: 'techbir-radio',
  standalone: true,
  imports: [CommonFieldModule,  MatRadioModule],
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
})
export class RadioComponent extends CommonFieldComponent {}
