import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Price } from '../entity';

@Dto()
export class QueryPriceViewDto extends QueryDto {
  @SearchProperty([])
  override search?: FindOptionsOrder<Price>;
}
