import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Category } from '../entity';

@Dto()
export class QueryCategoryViewDto extends QueryDto {
  @SearchProperty([])
  override search?: FindOptionsOrder<Category>;
}
