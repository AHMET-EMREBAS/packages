import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { CategoryMeta } from '../category.meta';
import { Category } from '../entity';

@Dto()
export class QueryCategoryDto extends QueryDto {
  @SearchProperty(CategoryMeta.searchables)
  override search?: FindOptionsOrder<Category>;
}
