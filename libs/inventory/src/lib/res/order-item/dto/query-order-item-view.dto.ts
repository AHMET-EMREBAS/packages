import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { OrderItem } from '../entity';

@Dto()
export class QueryOrderItemViewDto extends QueryDto {
  @SearchProperty([])
  override search?: FindOptionsOrder<OrderItem>;
}
