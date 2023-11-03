import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Sku } from '../entity';

@Dto()
export class QuerySkuViewDto extends QueryDto {
  @SearchProperty([])
  override search?: FindOptionsOrder<Sku>;
}
