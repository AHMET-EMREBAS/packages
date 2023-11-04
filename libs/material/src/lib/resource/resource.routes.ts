import { Routes } from '@angular/router';
import { provideNavItems, ENTITY_NAME_TOKEN, ResourceService } from '../api';

export const ResourceRoutes: (entityName: string) => Routes = (
  entityName: string
) => [
  {
    title: entityName,
    providers: [
      {
        provide: ENTITY_NAME_TOKEN,
        useValue: entityName,
      },
      provideNavItems([
        { name: 'dashboard', route: './' },
        { name: `table`, route: 'table' },
        { name: `create`, route: 'create' },
        { name: `config`, route: 'config' },
      ]),
      ResourceService,
    ],
    path: '',
    loadComponent: () =>
      import('../navigation/navigation.component').then(
        (c) => c.NavigationComponent
      ),

    children: [
      {
        path: '',
        loadComponent: () =>
          import('./../dashboard/dashboard.component').then(
            (c) => c.DashboardComponent
          ),
      },

      {
        path: 'table',
        loadComponent: () =>
          import('./table/table.component').then((c) => c.TableComponent),
      },
      {
        path: 'table/:id',
        loadComponent: () =>
          import('./detail/detail.component').then((c) => c.DetailComponent),
      },
      {
        path: 'create',
        loadComponent: () =>
          import('./create/create.component').then((c) => c.CreateComponent),
      },
      {
        path: 'update/:id',
        loadComponent: () =>
          import('./update/update.component').then((c) => c.UpdateComponent),
      },
      {
        path: 'delete/:id',
        loadComponent: () =>
          import('./delete/delete.component').then((c) => c.DeleteComponent),
      },
      {
        path: 'config',
        loadComponent: () =>
          import('./config/config.component').then((c) => c.ConfigComponent),
      },
    ],
  },
];
