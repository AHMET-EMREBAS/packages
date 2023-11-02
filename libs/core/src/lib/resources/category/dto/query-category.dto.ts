import { Dto, QueryDto, SearchProperty } from '@techbir/typeorm';
import { CategoryMeta } from '../category.meta';
import { FindOptionsOrder } from 'typeorm';
import { Category } from '../entity';

@Dto()
export class QueryCategoryDto extends QueryDto {
  @SearchProperty(CategoryMeta.searchables)
  override search?: FindOptionsOrder<Category>;
}
