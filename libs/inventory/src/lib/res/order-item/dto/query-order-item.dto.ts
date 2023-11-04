import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { OrderItem } from '../entity';
import { OrderItemSearchables } from '../order-item.meta';

@Dto()
export class QueryOrderItemDto extends QueryDto {
  @SearchProperty(OrderItemSearchables)
  override search?: FindOptionsOrder<OrderItem>;
}
