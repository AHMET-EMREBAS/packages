import { Routes, provideRouter, withHashLocation } from '@angular/router';
import {
  provideAppName,
  provideModuleName,
  WebsiteRoutes as __WebsiteRoutes,
  LocalStoreService,
} from '@techbir/material';

export const WebsiteRoutes: Routes = [
  {
    path: '',
    loadChildren: () => __WebsiteRoutes,
    providers: [
      LocalStoreService,
      provideAppName('Website'),
      provideModuleName('Website'),
    ],
  },
];
