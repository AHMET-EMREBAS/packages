import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Product } from '../entity';

@Dto()
export class QueryProductDto extends QueryDto {
  @SearchProperty([])
  override search?: FindOptionsOrder<Product>;
}
