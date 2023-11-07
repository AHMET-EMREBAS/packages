import { Route } from '@angular/router';
import { InventoryRoutes, WebsiteRoutes } from './routes';

export const appRoutes: Route[] = [
  { path: '', loadChildren: () => WebsiteRoutes },
  { path: 'inventory', loadChildren: () => InventoryRoutes },
];
