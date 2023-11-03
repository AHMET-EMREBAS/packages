import { ResourceMetadata, Rest } from './imports';

export const DepartmentMeta = new ResourceMetadata({
  entityName: 'Department',
  searchables: ['id', 'name'],
  uniq: ['name'],
  viewSearchables: ['id', 'name'],
});

export const DepartmentRest = new Rest(DepartmentMeta);
