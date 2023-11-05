import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Provider, inject } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { Observable, catchError, map, of } from 'rxjs';
import { excludeUndefined, names } from '@techbir/utils';

export type QueryObject = {
  take?: number;
  skip?: number;
  orderBy?: string;
  orderDir?: string;
  withDeleted?: boolean;
  search?: string;
};

export const ENTITY_NAME_TOKEN = 'ENTITY_NAME_TOKEN';

export function provideEntityName(name: string): Provider {
  return {
    provide: ENTITY_NAME_TOKEN,
    useValue: name,
  };
}

@Injectable({ providedIn: 'root', useExisting: true })
export class ResourceService<T> extends EntityCollectionServiceBase<T> {
  nameVariants = names(this.entityName);

  allCount$: Observable<number> = inject(HttpClient)
    .get<number>(`api/meta/${this.nameVariants.fileName}/count`)
    .pipe(
      map((value) => {
        return value || 999999;
      }),
      catchError(() => {
        return of(99999999);
      })
    );

  constructor(
    @Inject(ENTITY_NAME_TOKEN) entityName: string,
    serviceElementsFactory: EntityCollectionServiceElementsFactory
  ) {
    super(entityName, serviceElementsFactory);
  }

  private nid() {
    return new Date().getTime();
  }

  /**
   * Use this method
   * @param id
   * @returns
   */
  deleteItem(id: number) {
    return this.removeOneFromCache(id);
  }

  /**
   * Use this method
   * @param item
   * @returns
   */
  updateItem(item: T) {
    return this.updateOneInCache(item);
  }

  /**
   * @important Use this method!
   * @param item
   */
  saveItem(item: T) {
    this.addOneToCache({ ...item, id: this.nid() });
  }

  queryItem(query: QueryObject) {
    return this.getWithQuery(excludeUndefined(query));
  }
}
