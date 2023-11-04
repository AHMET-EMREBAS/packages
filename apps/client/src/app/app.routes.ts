import { Route } from '@angular/router';
import { ResourceRoutes } from '@techbir/material';

export const appRoutes: Route[] = [
  { path: 'sample', loadChildren: () => ResourceRoutes('Sample') },
  { path: 'product', loadChildren: () => ResourceRoutes('Product') },
];
