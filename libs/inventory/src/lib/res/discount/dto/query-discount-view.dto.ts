import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Discount } from '../entity';
import { DiscountViewSearchables } from '../discount.meta';

@Dto()
export class QueryDiscountViewDto extends QueryDto {
  @SearchProperty(DiscountViewSearchables)
  override search?: FindOptionsOrder<Discount>;
}
