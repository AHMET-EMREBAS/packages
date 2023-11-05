import { Routes } from '@angular/router';
import { provideNavItems, ENTITY_NAME_TOKEN, ResourceService } from '../api';
import '@angular/localize';

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
        { name: 'Home', route: '..' },
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
        title: $localize`${entityName} Dashboard`,
        path: '',
        loadComponent: () =>
          import('./../dashboard/dashboard.component').then(
            (c) => c.DashboardComponent
          ),
      },

      {
        title: $localize`View ${entityName}s`,
        path: 'table',
        loadComponent: () =>
          import('./table/table.component').then((c) => c.TableComponent),
      },
      {
        title: $localize`Details of ${entityName}`,
        path: 'detail/:id',
        loadComponent: () =>
          import('./detail/detail.component').then((c) => c.DetailComponent),
      },
      {
        title: $localize`Create ${entityName}`,
        path: 'create',
        loadComponent: () =>
          import('./create/create.component').then((c) => c.CreateComponent),
      },
      {
        title: $localize`Update ${entityName}`,
        path: 'update/:id',
        loadComponent: () =>
          import('./update/update.component').then((c) => c.UpdateComponent),
      },
      {
        title: $localize`Delete ${entityName}`,
        path: 'delete/:id',
        loadComponent: () =>
          import('./delete/delete.component').then((c) => c.DeleteComponent),
      },
      {
        title: $localize`Configure ${entityName} Resource`,
        path: 'config',
        loadComponent: () =>
          import('./config/config.component').then((c) => c.ConfigComponent),
      },
    ],
  },
];
