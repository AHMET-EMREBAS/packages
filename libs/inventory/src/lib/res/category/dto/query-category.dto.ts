import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Category } from '../entity';

@Dto()
export class QueryCategoryDto extends QueryDto {
  @SearchProperty([])
  override search?: FindOptionsOrder<Category>;
}
