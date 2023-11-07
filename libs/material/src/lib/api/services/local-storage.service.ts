import { Inject, Injectable } from '@angular/core';
import { APP_NAME_TOKEN, MODULE_NAME_TOKEN } from '../providers';

/**
 * Localstore Servcie is for persisting module configurations or data to browser local storeage.
 * This service should be provided because it is required for some components.
 */
@Injectable({ providedIn: 'root' })
export class LocalStoreService {
  constructor(
    @Inject(APP_NAME_TOKEN) private readonly appName: string,
    @Inject(MODULE_NAME_TOKEN) private readonly moduleName: string
  ) {}

  private itemName(name: string) {
    return `${this.appName}_${this.moduleName}_${name}`;
  }

  set(key: string, value: any) {
    const valueAsString = JSON.stringify(value);
    localStorage.setItem(this.itemName(key), valueAsString);
  }

  get<T>(key: string, defaultValue?: T): T | undefined {
    const value = localStorage.getItem(this.itemName(key));
    if (value != undefined) {
      return JSON.parse(value) as T;
    } else {
      return defaultValue;
    }
  }
}
