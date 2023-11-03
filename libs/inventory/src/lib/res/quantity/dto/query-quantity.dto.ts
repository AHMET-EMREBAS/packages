import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Quantity } from '../entity';

@Dto()
export class QueryQuantityDto extends QueryDto {
  @SearchProperty([])
  override search?: FindOptionsOrder<Quantity>;
}
