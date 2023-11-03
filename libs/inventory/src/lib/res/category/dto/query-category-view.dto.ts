import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Category } from '../entity';
import { CategoryViewSearchables } from '../category.meta';

@Dto()
export class QueryCategoryViewDto extends QueryDto {
  @SearchProperty(CategoryViewSearchables)
  override search?: FindOptionsOrder<Category>;
}
