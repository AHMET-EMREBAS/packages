import { CombinePropertyDecorators } from '@techbir/common';
import { Property } from './property';
import { QueryStringTransformer } from '../transform';

export function SearchProperty(searchables: string[]) {
  return CombinePropertyDecorators(
    Property({ type: 'string', maxLength: 100 }),
    QueryStringTransformer(searchables)
  );
}
