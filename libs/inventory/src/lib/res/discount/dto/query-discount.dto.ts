import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Discount } from '../entity';
import { DiscountSearchables } from '../discount.meta';

@Dto()
export class QueryDiscountDto extends QueryDto {
  @SearchProperty(DiscountSearchables)
  override search?: FindOptionsOrder<Discount>;
}
