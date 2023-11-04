import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { ProductImage } from '../entity';
import { ProductImageViewSearchables } from '../product-image.meta';

@Dto()
export class QueryProductImageViewDto extends QueryDto {
  @SearchProperty(ProductImageViewSearchables)
  override search?: FindOptionsOrder<ProductImage>;
}
