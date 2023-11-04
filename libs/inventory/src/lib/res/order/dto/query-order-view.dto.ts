import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Order } from '../entity';
import { OrderViewSearchables } from '../order.meta';

@Dto()
export class QueryOrderViewDto extends QueryDto {
  @SearchProperty(OrderViewSearchables)
  override search?: FindOptionsOrder<Order>;
}
