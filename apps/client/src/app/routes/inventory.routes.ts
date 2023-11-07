import { Routes } from '@angular/router';
import {
  LocalStoreService,
  ResourceRoutes,
  TextFieldComponent,
  TextareaComponent,
  provideAppName,
  provideFormFieldAppearance,
  provideFormFields,
  provideFormGroup,
  provideModuleName,
  provideNavItems,
  provideTableColumns,
} from '@techbir/material';

export const InventoryRoutes: Routes = [
  {
    title: $localize`Inventory`,
    path: '',
    providers: [
      LocalStoreService,
      provideAppName('Inventory'),
      provideModuleName('Inventory'),
      provideNavItems([
        { name: 'Home', route: './', icon: 'home' },
        { name: 'product', route: 'product', icon: 'inventory' },
        { name: 'category', route: 'category', icon: 'category' },
      ]),
    ],
    loadComponent: () =>
      import('@techbir/material').then((c) => c.NavigationComponent),
  },
  {
    title: $localize`Product`,
    path: 'product',
    loadChildren: () => ResourceRoutes(),
    providers: [
      provideModuleName('Product'),
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
];
