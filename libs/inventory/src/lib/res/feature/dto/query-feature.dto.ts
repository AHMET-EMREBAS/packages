import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Feature } from '../entity';
import { FeatureSearchables } from '../feature.meta';

@Dto()
export class QueryFeatureDto extends QueryDto {
  @SearchProperty(FeatureSearchables)
  override search?: FindOptionsOrder<Feature>;
}
