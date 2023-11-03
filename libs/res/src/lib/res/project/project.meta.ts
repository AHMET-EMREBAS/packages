import { ResourceMetadata, Rest } from './imports';

export const ProjectMeta = new ResourceMetadata({
  entityName: 'Project',
  searchables: ['id', 'name'],
  uniq: ['name'],
  viewSearchables: ['id', 'name'],
});

export const ProjectRest = new Rest(ProjectMeta);
