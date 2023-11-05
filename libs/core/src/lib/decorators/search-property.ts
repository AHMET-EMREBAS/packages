import { CombinePropertyDecorators } from '@techbir/common';
import { Property } from './property';
import { QueryStringTransformer } from '../transform';

export function SearchProperty(searchables: string[]) {
  return CombinePropertyDecorators(
    Property({ type: 'string', novalidate: true }),
    QueryStringTransformer(searchables)
  );
}
