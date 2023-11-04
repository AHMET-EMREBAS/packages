import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Store } from '../entity';
import { StoreViewSearchables } from '../store.meta';

@Dto()
export class QueryStoreViewDto extends QueryDto {
  @SearchProperty(StoreViewSearchables)
  override search?: FindOptionsOrder<Store>;
}
