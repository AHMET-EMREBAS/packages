import { Component, Inject, Optional } from '@angular/core';
import { CommonFieldComponent, CommonFieldModule } from '../common-field';
import { FormGroup } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { FORM_FIELD_APPEARANCE_TOKEN, ResourceService } from '../../api';
import { Observable } from 'rxjs';
import {
  MatAutocompleteModule,
  MatAutocompleteSelectedEvent,
} from '@angular/material/autocomplete';
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  selector: 'techbir-search',
  standalone: true,
  imports: [CommonFieldModule, MatAutocompleteModule, ScrollingModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent extends CommonFieldComponent {
  entities$: Observable<{ id: any; name: string }[]> = this.service.entities$;

  constructor(
    @Inject(FormGroup) formGroup: FormGroup,
    @Optional()
    @Inject(FORM_FIELD_APPEARANCE_TOKEN)
    appearance: MatFormField['appearance'],
    protected readonly service: ResourceService<any>
  ) {
    super(formGroup, appearance);
  }

  search(text: string) {
    this.service.search(text);
  }

  resetInputValue() {
    this.control.setValue('');
  }

  updateControlValue(event: MatAutocompleteSelectedEvent) {
    this.control.setValue(event.option.id);
  }
}
