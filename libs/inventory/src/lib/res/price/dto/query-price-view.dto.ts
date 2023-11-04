import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Price } from '../entity';
import { PriceViewSearchables } from '../price.meta';

@Dto()
export class QueryPriceViewDto extends QueryDto {
  @SearchProperty(PriceViewSearchables)
  override search?: FindOptionsOrder<Price>;
}
