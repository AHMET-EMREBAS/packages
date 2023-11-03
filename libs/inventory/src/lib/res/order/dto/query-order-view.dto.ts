import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Order } from '../entity';

@Dto()
export class QueryOrderViewDto extends QueryDto {
  @SearchProperty([])
  override search?: FindOptionsOrder<Order>;
}
