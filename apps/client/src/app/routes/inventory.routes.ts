import { Routes } from '@angular/router';
import {
  LocalStoreService,
  NavigationComponent,
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
    component: NavigationComponent,
  },
  {
    title: $localize`Product`,
    path: 'product',
    loadChildren: () => ResourceRoutes('Inventory', 'Product', 'Product'),
    providers: [
      provideModuleName('Product'),
      provideFormGroup({
        name: 'Product Name',
        description: 'Product Description',
        barcode: 'Product barcode',
      }),
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
    title: $localize`Category`,
    path: 'category',
    loadChildren: () => ResourceRoutes('Inventory', 'Category', 'Category'),
    providers: [
      provideModuleName('Category'),
      provideFormGroup({ name: '' }),
      provideTableColumns([
        { name: 'name', label: 'Category Name', icon: 'info' },
      ]),
      provideFormFields([
        {
          label: 'Category Name',
          name: 'name',
          component: TextFieldComponent,
          icon: 'info',
        },
      ]),
    ],
  },
];
