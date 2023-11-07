import { Routes } from '@angular/router';
import {
  LocalStoreService,
  ResourceService,
  provideAppName,
  provideEntityName,
  provideModuleName,
  provideNavItems,
  provideSearchControl,
} from '../api';
import '@angular/localize';

export const ResourceRoutes: (
  appName: string,
  moduleName: string,
  entityName: string
) => Routes = (appName: string, moduleName: string, entityName: string) => [
  {
    path: '',
    loadComponent: () =>
      import('../navigations').then((n) => n.NavigationComponent),
    providers: [
      LocalStoreService,
      ResourceService,
      provideSearchControl(),
      provideAppName(appName),
      provideModuleName(moduleName),
      provideEntityName(entityName),
      provideNavItems([
        {
          icon: 'home',
          name: $localize`Home`,
          route: '../',
          params: { ignoreLastRoute: true },
        },
        { icon: 'overview', name: $localize`Overview`, route: './' },
        { icon: 'dashboard', name: $localize`Dashboard`, route: 'dashboard' },
        { icon: 'dataset', name: $localize`View`, route: 'view' },
        { icon: 'add_box', name: $localize`Create`, route: 'create' },
        { icon: 'settings', name: $localize`Config`, route: 'config' },
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
