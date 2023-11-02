import { CombinePropertyDecorators } from '@techbir/utils';
import { Property } from './property.decorator';
import { SearchQueryTransformer } from '../base';

export function SearchProperty(searchables: string[]) {
  return CombinePropertyDecorators(
    Property({ type: 'string', maxLength: 100 }),
    SearchQueryTransformer(searchables)
  );
}
