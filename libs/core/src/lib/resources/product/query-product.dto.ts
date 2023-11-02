import { Dto, QueryDto, SearchProperty } from '@techbir/typeorm';
import { ProductMeta } from './product.meta';
import { FindOptionsOrder } from 'typeorm';
import { Product } from './product.entity';

@Dto()
export class QueryProductDto extends QueryDto {
  @SearchProperty(ProductMeta.searchables)
  override search?: FindOptionsOrder<Product>;
}
