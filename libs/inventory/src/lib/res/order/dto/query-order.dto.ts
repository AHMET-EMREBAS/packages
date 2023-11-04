import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Order } from '../entity';
import { OrderSearchables } from '../order.meta';

@Dto()
export class QueryOrderDto extends QueryDto {
  @SearchProperty(OrderSearchables)
  override search?: FindOptionsOrder<Order>;
}
