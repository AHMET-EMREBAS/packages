import { FormControl, FormGroup } from '@angular/forms';
import { Route } from '@angular/router';
import { ResourceRoutes } from '@techbir/material';

export const appRoutes: Route[] = [
  {
    path: 'sample',
    loadChildren: () => ResourceRoutes('Sample'),
    providers: [
      {
        provide: FormGroup,
        useValue: new FormGroup({ name: new FormControl('') }),
      },
    ],
  },
  {
    path: 'product',
    loadChildren: () => ResourceRoutes('Product'),
    providers: [
      {
        provide: FormGroup,
        useValue: new FormGroup({ name: new FormControl('') }),
      },
    ],
  },
];
