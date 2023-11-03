import { ReadStoreDto } from './dto';
import { Rest } from './imports';

export const StoreEntityName = 'Store';
export const StoreViewName = 'Store';
export const StoreSingularPath = 'store';
export const StorePluralPath = 'stores';
export const StoreSingularViewPath = 'store-view';
export const StorePluralViewPath = 'stores-view';

export const StoreSearchables: string[] = [];
export const StoreUniqueFields: string[] = [];
export const StoreViewSearchables: string[] = [];

export const StoreRest = new Rest(
  StoreEntityName,
  StoreSingularPath,
  StorePluralPath,
  ReadStoreDto
);
