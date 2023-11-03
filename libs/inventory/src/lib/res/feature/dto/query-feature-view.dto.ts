import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Feature } from '../entity';

@Dto()
export class QueryFeatureViewDto extends QueryDto {
  @SearchProperty([])
  override search?: FindOptionsOrder<Feature>;
}
