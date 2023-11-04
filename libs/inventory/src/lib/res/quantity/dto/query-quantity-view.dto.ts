import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Quantity } from '../entity';
import { QuantityViewSearchables } from '../quantity.meta';

@Dto()
export class QueryQuantityViewDto extends QueryDto {
  @SearchProperty(QuantityViewSearchables)
  override search?: FindOptionsOrder<Quantity>;
}
