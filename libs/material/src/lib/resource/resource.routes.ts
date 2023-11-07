import { Routes } from '@angular/router';
import {
  provideNavItems,
  ResourceService,
  provideEntityName,
  provideSearchControl,
  provideModuleName,
} from '../api';
import '@angular/localize';

export const ResourceRoutes: (entityName: string) => Routes = (
  entityName: string
) => [
  {
    title: entityName,
    providers: [
      provideEntityName(entityName),
      provideSearchControl(),
      provideModuleName(entityName),
      provideNavItems([
        { icon: 'dashboard', name: 'dashboard', route: 'dashboard' },
        { icon: 'dataset', name: `view`, route: 'view' },
        { icon: 'add_box', name: `create`, route: 'create' },
        { icon: 'settings', name: `config`, route: 'config' },
      ]),

      ResourceService,
    ],
    path: '',
    loadComponent: () =>
      import('../navigations/navigation/navigation.component').then(
        (c) => c.NavigationComponent
      ),

    children: [
      {
        path: '',
        loadComponent: () =>
          import('./resource.component').then((c) => c.ResourceComponent),
      },
      {
        title: $localize`${entityName} Dashboard`,
        path: 'dashboard',

        loadComponent: () =>
          import('./dashboard/dashboard.component').then(
            (c) => c.DashboardComponent
          ),

        providers: [provideModuleName(entityName + 'Dashboard')],
      },

      {
        title: $localize`View ${entityName}s`,
        path: 'view',
        loadComponent: () =>
          import('./view/view.component').then((c) => c.ViewComponent),
        providers: [provideModuleName(entityName + 'View')],
      },
      {
        title: $localize`Details of ${entityName}`,
        path: 'view/:id',
        loadComponent: () =>
          import('./detail/detail.component').then((c) => c.DetailComponent),
        providers: [provideModuleName(entityName + 'Detail')],
      },
      {
        title: $localize`Create ${entityName}`,
        path: 'create',
        loadComponent: () =>
          import('./create/create.component').then((c) => c.CreateComponent),
        providers: [provideModuleName(entityName + 'Create')],
      },
      {
        title: $localize`Update ${entityName}`,
        path: 'update/:id',
        loadComponent: () =>
          import('./update/update.component').then((c) => c.UpdateComponent),
        providers: [provideModuleName(entityName + 'Update')],
      },
      {
        title: $localize`Delete ${entityName}`,
        path: 'delete/:id',
        loadComponent: () =>
          import('./delete/delete.component').then((c) => c.DeleteComponent),
        providers: [provideModuleName(entityName + 'Delete')],
      },
      {
        title: $localize`Configure ${entityName} Resource`,
        path: 'config',
        loadComponent: () =>
          import('./config/config.component').then((c) => c.ConfigComponent),
        providers: [provideModuleName(entityName + 'Config')],
      },
    ],
  },
];
