import { PropertyOptions } from './property-options';
import { RelationOptions } from './relation-options';

export class Model {
  name!: string;
  properties?: PropertyOptions[];
  relations?: RelationOptions[];
}
