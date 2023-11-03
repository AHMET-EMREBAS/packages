import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Category } from '../entity';
import { CategorySearchables } from '../category.meta';

@Dto()
export class QueryCategoryDto extends QueryDto {
  @SearchProperty(CategorySearchables)
  override search?: FindOptionsOrder<Category>;
}
