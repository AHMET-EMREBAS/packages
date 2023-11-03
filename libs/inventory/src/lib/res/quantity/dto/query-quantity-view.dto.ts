import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Quantity } from '../entity';

@Dto()
export class QueryQuantityViewDto extends QueryDto {
  @SearchProperty([])
  override search?: FindOptionsOrder<Quantity>;
}
