import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Sku } from '../entity';
import { SkuSearchables } from '../sku.meta';

@Dto()
export class QuerySkuDto extends QueryDto {
  @SearchProperty(SkuSearchables)
  override search?: FindOptionsOrder<Sku>;
}
