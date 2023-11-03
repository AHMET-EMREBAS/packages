import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Sku } from '../entity';

@Dto()
export class QuerySkuDto extends QueryDto {
  @SearchProperty([])
  override search?: FindOptionsOrder<Sku>;
}
