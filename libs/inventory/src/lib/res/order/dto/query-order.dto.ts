import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Order } from '../entity';

@Dto()
export class QueryOrderDto extends QueryDto {
  @SearchProperty([])
  override search?: FindOptionsOrder<Order>;
}
