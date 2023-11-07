import { Routes } from '@angular/router';

export const WebsiteRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./website.component').then((c) => c.WebsiteComponent),
  },
];
