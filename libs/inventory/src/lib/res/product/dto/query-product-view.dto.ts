import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Product } from '../entity';
import { ProductViewSearchables } from '../product.meta';

@Dto()
export class QueryProductViewDto extends QueryDto {
  @SearchProperty(ProductViewSearchables)
  override search?: FindOptionsOrder<Product>;
}
