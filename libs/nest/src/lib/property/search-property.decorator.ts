import { Property } from './property.decorator';
import { SearchQueryTransformer } from '../base';
import { CombinePropertyDecorators } from '../common';

export function SearchProperty(searchables: string[]) {
  return CombinePropertyDecorators(
    Property({ type: 'string', maxLength: 100 }),
    SearchQueryTransformer(searchables)
  );
}
