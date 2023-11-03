import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Discount } from '../entity';

@Dto()
export class QueryDiscountViewDto extends QueryDto {
  @SearchProperty([])
  override search?: FindOptionsOrder<Discount>;
}
