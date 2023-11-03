import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Store } from '../entity';

@Dto()
export class QueryStoreDto extends QueryDto {
  @SearchProperty([])
  override search?: FindOptionsOrder<Store>;
}
