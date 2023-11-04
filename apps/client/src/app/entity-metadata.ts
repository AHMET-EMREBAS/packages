import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Sample: {},
  Product: {},
};

const pluralNames = {
  Sample: 'Samples',
  Product: 'Products',
};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames,
};
