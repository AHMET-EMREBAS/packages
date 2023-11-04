import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Quantity } from '../entity';
import { QuantitySearchables } from '../quantity.meta';

@Dto()
export class QueryQuantityDto extends QueryDto {
  @SearchProperty(QuantitySearchables)
  override search?: FindOptionsOrder<Quantity>;
}
