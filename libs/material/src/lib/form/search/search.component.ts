import { Component } from '@angular/core';
import { CommonFieldComponent, CommonFieldModule } from '../common-field';

@Component({
  selector: 'techbir-search',
  standalone: true,
  imports: [CommonFieldModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent extends CommonFieldComponent {}
