import { Routes } from '@angular/router';
import { provideModuleName, provideNavItems } from '../api';
import '@angular/localize';

export const ResourceRoutes: () => Routes = () => [
  {
    path: '',
    loadComponent: () =>
      import('../navigations').then((n) => n.NavigationComponent),
    providers: [
      provideNavItems([
        { icon: 'dashboard', name: 'dashboard', route: 'dashboard' },
        { icon: 'dataset', name: `view`, route: 'view' },
        { icon: 'add_box', name: `create`, route: 'create' },
        { icon: 'settings', name: `config`, route: 'config' },
      ]),
    ],

    children: [
      {
        path: '',
        loadComponent: () =>
          import('./resource.component').then((c) => c.ResourceComponent),
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./dashboard/dashboard.component').then(
            (c) => c.DashboardComponent
          ),
        providers: [provideModuleName('Dashboard')],
      },

      {
        path: 'view',
        loadComponent: () =>
          import('./view/view.component').then((c) => c.ViewComponent),
        providers: [provideModuleName('View')],
      },
      {
        path: 'view/:id',
        loadComponent: () =>
          import('./detail/detail.component').then((c) => c.DetailComponent),
        providers: [provideModuleName('Detail')],
      },
      {
        path: 'create',
        loadComponent: () =>
          import('./create/create.component').then((c) => c.CreateComponent),
        providers: [provideModuleName('Create')],
      },
      {
        path: 'update/:id',
        loadComponent: () =>
          import('./update/update.component').then((c) => c.UpdateComponent),
        providers: [provideModuleName('Update')],
      },
      {
        path: 'delete/:id',
        loadComponent: () =>
          import('./delete/delete.component').then((c) => c.DeleteComponent),
        providers: [provideModuleName('Delete')],
      },
      {
        path: 'config',
        loadComponent: () =>
          import('./config/config.component').then((c) => c.ConfigComponent),
        providers: [provideModuleName('Config')],
      },
    ],
  },
];
