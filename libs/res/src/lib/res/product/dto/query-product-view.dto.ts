import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { ProductMeta } from '../product.meta';
import { Product } from '../entity';

@Dto()
export class QueryProductViewDto extends QueryDto {
  @SearchProperty(ProductMeta.viewSearchables)
  override search?: FindOptionsOrder<Product>;
}
