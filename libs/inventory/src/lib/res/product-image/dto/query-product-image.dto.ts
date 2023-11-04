import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { ProductImage } from '../entity';
import { ProductImageSearchables } from '../product-image.meta';

@Dto()
export class QueryProductImageDto extends QueryDto {
  @SearchProperty(ProductImageSearchables)
  override search?: FindOptionsOrder<ProductImage>;
}
