import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { ProductImage } from '../entity';

@Dto()
export class QueryProductImageViewDto extends QueryDto {
  @SearchProperty([])
  override search?: FindOptionsOrder<ProductImage>;
}
