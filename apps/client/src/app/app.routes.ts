import { Route } from '@angular/router';
import { InventoryRoutes, WebsiteRoutes } from './routes';
import { PageNotFoundComponent, provideAppName } from '@techbir/material';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => WebsiteRoutes,
    providers: [provideAppName('Website')],
  },
  {
    path: 'inventory',
    loadChildren: () => InventoryRoutes,
    providers: [provideAppName('Inventory')],
  },
  {
    path: '**',
    pathMatch: 'prefix',
    component: PageNotFoundComponent,
  },
];
