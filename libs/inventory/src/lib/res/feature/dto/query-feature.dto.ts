import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Feature } from '../entity';

@Dto()
export class QueryFeatureDto extends QueryDto {
  @SearchProperty([])
  override search?: FindOptionsOrder<Feature>;
}
