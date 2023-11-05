import { Provider } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';

export const FORM_FIELD_APPEARANCE_TOKEN = 'FORM_FIELD_APPEARANCE_TOKEN';

export function provideFormFieldAppearance(
  appearance: MatFormField['appearance']
): Provider {
  return {
    provide: FORM_FIELD_APPEARANCE_TOKEN,
    useValue: appearance,
  };
}

/**
 * Inject list of FormFields
 */
export const FORM_FIELDS_TOKEN = 'FORM_FIELDS_TOKEN';

export type FormField = {
  name: string;
  type:
    | 'checkbox'
    | 'date'
    | 'date-range'
    | 'date-time'
    | 'number'
    | 'radio'
    | 'select'
    | 'slider'
    | 'switch'
    | 'text'
    | 'textarea';
};

export function provideFormFields(fields: FormField[]): Provider {
  return {
    provide: FORM_FIELDS_TOKEN,
    useValue: fields,
  };
}
