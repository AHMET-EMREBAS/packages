import { Routes } from '@angular/router';
import { provideNavItems } from '../api';

export const WebsiteRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./../navigations').then((c) => c.WebNavigationComponent),
    providers: [
      provideNavItems([
        { name: 'home', route: 'home', icon: 'home' },
        { name: 'about', route: 'about', icon: 'info' },
        { name: 'services', route: 'services', icon: 'apps' },
        { name: 'contact', route: 'contact', icon: 'message' },
        { name: 'pricing', route: 'pricing', icon: 'money' },
      ]),
    ],

    children: [
      {
        path: '',
        loadComponent: () =>
          import('./website.component').then((c) => c.WebsiteComponent),
      },
      {
        path: 'home',
        loadComponent: () =>
          import('./home/home.component').then((c) => c.HomeComponent),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./about/about.component').then((c) => c.AboutComponent),
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./contact/contact.component').then((c) => c.ContactComponent),
      },
      {
        path: 'pricing',
        loadComponent: () =>
          import('./pricing/pricing.component').then((c) => c.PricingComponent),
      },
      {
        path: 'services',
        loadComponent: () =>
          import('./services/services.component').then(
            (c) => c.ServicesComponent
          ),
      },
    ],
  },
];
