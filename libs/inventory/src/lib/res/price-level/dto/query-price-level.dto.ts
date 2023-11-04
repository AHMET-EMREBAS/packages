import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { PriceLevel } from '../entity';
import { PriceLevelSearchables } from '../price-level.meta';

@Dto()
export class QueryPriceLevelDto extends QueryDto {
  @SearchProperty(PriceLevelSearchables)
  override search?: FindOptionsOrder<PriceLevel>;
}
