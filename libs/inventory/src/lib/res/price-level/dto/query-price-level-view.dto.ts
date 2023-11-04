import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { PriceLevel } from '../entity';
import { PriceLevelViewSearchables } from '../price-level.meta';

@Dto()
export class QueryPriceLevelViewDto extends QueryDto {
  @SearchProperty(PriceLevelViewSearchables)
  override search?: FindOptionsOrder<PriceLevel>;
}
