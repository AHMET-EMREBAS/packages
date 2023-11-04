import { Inject, Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

export const ENTITY_NAME_TOKEN = 'ENTITY_NAME_TOKEN';

@Injectable({ providedIn: 'root', useExisting: true })
export class ResourceService<T> extends EntityCollectionServiceBase<T> {
  constructor(
    @Inject(ENTITY_NAME_TOKEN) entityName: string,
    serviceElementsFactory: EntityCollectionServiceElementsFactory
  ) {
    super(entityName, serviceElementsFactory);
  }
}
