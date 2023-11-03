import { ResourceMetadata, Rest } from './imports';

export const CategoryMeta = new ResourceMetadata({
  entityName: 'Category',
  searchables: ['id', 'name'],
  uniq: ['name'],
  viewSearchables: ['id', 'name'],
});

export const CategoryRest = new Rest(CategoryMeta);
