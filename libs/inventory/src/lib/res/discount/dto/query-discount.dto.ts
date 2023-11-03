import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Discount } from '../entity';

@Dto()
export class QueryDiscountDto extends QueryDto {
  @SearchProperty([])
  override search?: FindOptionsOrder<Discount>;
}
