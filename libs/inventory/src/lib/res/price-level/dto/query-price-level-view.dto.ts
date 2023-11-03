import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { PriceLevel } from '../entity';

@Dto()
export class QueryPriceLevelViewDto extends QueryDto {
  @SearchProperty([])
  override search?: FindOptionsOrder<PriceLevel>;
}
