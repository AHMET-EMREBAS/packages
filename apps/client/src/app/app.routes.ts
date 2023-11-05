import { Route } from '@angular/router';
import {
  ResourceRoutes,
  TextFieldComponent,
  provideFormFieldAppearance,
  provideFormFields,
  provideFormGroup,
} from '@techbir/material';

export const appRoutes: Route[] = [
  {
    path: 'sample',
    loadChildren: () => ResourceRoutes('Sample'),
    providers: [
      provideFormGroup({ name: '' }),
      provideFormFieldAppearance('fill'),
      provideFormFields([{ name: 'name', component: TextFieldComponent }]),
    ],
  },
  {
    path: 'product',
    loadChildren: () => ResourceRoutes('Product'),

    providers: [
      provideFormGroup({ name: '', description: '' }),
      provideFormFieldAppearance('outline'),
      provideFormFields([
        {
          name: 'name',
          icon: 'info',
          label: 'Product Name',
          component: TextFieldComponent,
        },
        {
          name: 'description',
          icon: 'description',
          label: 'Product Description',
          component: TextFieldComponent,
        },
      ]),
    ],
  },
];
