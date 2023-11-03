import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { ProductImage } from '../entity';

@Dto()
export class QueryProductImageDto extends QueryDto {
  @SearchProperty([])
  override search?: FindOptionsOrder<ProductImage>;
}
