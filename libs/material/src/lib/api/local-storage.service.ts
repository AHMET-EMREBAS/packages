import { Provider } from '@angular/core';

export const LOCAL_STOREAGE_NAME_TOKEN = 'LOCAL_STOREAGE_NAME_TOKEN';

export class LocalStoreService {
  constructor(private readonly storageName: string) {}

  private itemName(name: string) {
    return `${this.storageName}_${name}`;
  }
  set(key: string, value: any) {
    const valueAsString = JSON.stringify(value);
    localStorage.setItem(this.itemName(key), valueAsString);
  }

  get(key: string): any {
    const value = localStorage.getItem(this.itemName(key));
    if (value != undefined) {
      return JSON.parse(value);
    }
  }
}

export function provideLocalStoreService(name: string): Provider {
  return {
    provide: LocalStoreService,
    useValue: new LocalStoreService(name),
  };
}
