import { Provider } from '@angular/core';

export const VIEW_COMPONENT_TOKEN = 'VIEW_COMPONENT_TOKEN';

export function provideViewComponent(viewComponent: any): Provider {
  return {
    provide: VIEW_COMPONENT_TOKEN,
    useValue: viewComponent,
  };
}
