import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Product } from '../entity';
import { ProductSearchables } from '../product.meta';

@Dto()
export class QueryProductDto extends QueryDto {
  @SearchProperty(ProductSearchables)
  override search?: FindOptionsOrder<Product>;
}
