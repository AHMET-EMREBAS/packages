import { PropertyOptions } from './property';
import { RelationOptions } from './relation';

export type ModelOptions = {
  name: string;
  properties: Record<string, PropertyOptions>;
  relations: Record<string, RelationOptions>;
  required?: string[];
  unique?: string[];
  searchables?: string[];
  viewSearchables?: string[];
};
