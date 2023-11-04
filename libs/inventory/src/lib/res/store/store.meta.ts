import { ReadStoreDto } from './dto';
import { Rest } from './imports';
import { Store } from './entity';

export const StoreEntityName = 'Store';
export const StoreViewName = 'Store';
export const StoreSingularPath = 'store';
export const StorePluralPath = 'stores';
export const StoreSingularViewPath = 'store-view';
export const StorePluralViewPath = 'stores-view';

export const StoreSearchables: (keyof Store)[] = [];
export const StoreUniqueFields: (keyof Store)[] = ['name'];
export const StoreViewSearchables: string[] = [];

export const StoreRest = new Rest(
  StoreEntityName,
  StoreSingularPath,
  StorePluralPath,
  ReadStoreDto
);
