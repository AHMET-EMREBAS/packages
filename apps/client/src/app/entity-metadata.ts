import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Sample: {},
  Product: {},
  Category: {},
};

const pluralNames = {
  Sample: 'Samples',
  Product: 'Products',
  Category: 'Categories',
};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames,
};
