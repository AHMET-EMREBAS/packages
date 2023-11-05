import { Route } from '@angular/router';
import {
  ResourceRoutes,
  TextFieldComponent,
  TextareaComponent,
  provideFormFieldAppearance,
  provideFormFields,
  provideFormGroup,
  provideTableColumns,
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
      provideFormGroup({ name: '', description: '', barcode: '' }),
      provideFormFieldAppearance('fill'),
      provideTableColumns([
        { name: 'name', label: 'Product Name', icon: 'info' },
        { name: 'description', label: 'Description', icon: 'description' },
        { name: 'barcode', label: 'Barcode', icon: 'barcode' },
      ]),
      provideFormFields([
        {
          label: 'Product Barcode',
          name: 'barcode',
          component: TextFieldComponent,
          icon: 'barcode',
        },
        {
          label: 'Product Name',
          name: 'name',
          component: TextFieldComponent,
          icon: 'info',
        },
        {
          label: 'Product Description',
          name: 'description',
          component: TextareaComponent,
          icon: 'description',
        },
      ]),
    ],
  },
  {
    path: 'category',
    loadChildren: () => ResourceRoutes('Category'),

    providers: [
      provideFormGroup({ name: '' }),
      provideTableColumns([{ name: 'name', label: 'Category', icon: 'info' }]),
      provideFormFieldAppearance('outline'),
      provideFormFields([
        {
          name: 'name',
          icon: 'info',
          label: 'Category',
          component: TextFieldComponent,
        },
      ]),
    ],
  },
];
