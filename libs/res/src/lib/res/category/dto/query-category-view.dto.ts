import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { CategoryMeta } from '../category.meta';
import { Category } from '../entity';

@Dto()
export class QueryCategoryViewDto extends QueryDto {
  @SearchProperty(CategoryMeta.viewSearchables)
  override search?: FindOptionsOrder<Category>;
}
