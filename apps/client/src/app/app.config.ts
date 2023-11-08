import { ApplicationConfig, isDevMode } from '@angular/core';

import {
  provideRouter,
  withComponentInputBinding,
  withHashLocation,
  withRouterConfig,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideServiceWorker } from '@angular/service-worker';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideEntityData, withEffects } from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { UrlInterceptorFn } from '@techbir/material';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      appRoutes,
      withHashLocation(),
      withComponentInputBinding(),
      withRouterConfig({
        onSameUrlNavigation: 'ignore',
        urlUpdateStrategy: 'eager',
        canceledNavigationResolution: 'computed',
      })
    ),
    provideAnimations(),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
    provideHttpClient(withInterceptors([UrlInterceptorFn])),
    provideStore(),
    provideEffects(),
    provideEntityData(entityConfig, withEffects()),
  ],
};
