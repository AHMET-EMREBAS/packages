import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Store } from '../entity';
import { StoreSearchables } from '../store.meta';

@Dto()
export class QueryStoreDto extends QueryDto {
  @SearchProperty(StoreSearchables)
  override search?: FindOptionsOrder<Store>;
}
