import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { OrderItem } from '../entity';
import { OrderItemViewSearchables } from '../order-item.meta';

@Dto()
export class QueryOrderItemViewDto extends QueryDto {
  @SearchProperty(OrderItemViewSearchables)
  override search?: FindOptionsOrder<OrderItem>;
}
