import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Price } from '../entity';
import { PriceSearchables } from '../price.meta';

@Dto()
export class QueryPriceDto extends QueryDto {
  @SearchProperty(PriceSearchables)
  override search?: FindOptionsOrder<Price>;
}
