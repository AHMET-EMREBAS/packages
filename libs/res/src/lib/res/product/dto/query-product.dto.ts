import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { ProductMeta } from '../product.meta';
import { Product } from '../entity';

@Dto()
export class QueryProductDto extends QueryDto {
  @SearchProperty(ProductMeta.searchables)
  override search?: FindOptionsOrder<Product>;
}
