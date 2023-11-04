import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { Feature } from '../entity';
import { FeatureViewSearchables } from '../feature.meta';

@Dto()
export class QueryFeatureViewDto extends QueryDto {
  @SearchProperty(FeatureViewSearchables)
  override search?: FindOptionsOrder<Feature>;
}
