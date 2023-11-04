import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Sku } from '../entity';
import { SkuViewSearchables } from '../sku.meta';

@Dto()
export class QuerySkuViewDto extends QueryDto {
  @SearchProperty(SkuViewSearchables)
  override search?: FindOptionsOrder<Sku>;
}
