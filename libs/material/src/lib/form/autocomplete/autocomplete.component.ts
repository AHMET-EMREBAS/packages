import { Component } from '@angular/core';
import { CommonFieldComponent, CommonFieldModule } from '../common-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@Component({
  selector: 'techbir-autocomplete',
  standalone: true,
  imports: [CommonFieldModule, MatAutocompleteModule],
  templateUrl: './autocomplete.component.html',
  styles: [],
})
export class AutocompleteComponent extends CommonFieldComponent {
  resetInputValue() {
    this.control.setValue('');
  }
}
