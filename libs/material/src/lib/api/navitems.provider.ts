import { Provider } from '@angular/core';

export const NAV_ITEMS_TOKEN = 'NAV_ITEMS_TOKEN';

export class NavItem {
  route!: string;
  name!: string;
  icon!: string;
}

export function provideNavItems(navItems: NavItem[]): Provider {
  return {
    provide: NAV_ITEMS_TOKEN,
    useValue: navItems,
  };
}
