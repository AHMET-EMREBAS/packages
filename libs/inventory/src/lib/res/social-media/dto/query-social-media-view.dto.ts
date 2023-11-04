import { Dto, FindOptionsOrder, QueryDto, SearchProperty } from '../imports';
import { SocialMedia } from '../entity';
import { SocialMediaViewSearchables } from '../social-media.meta';

@Dto()
export class QuerySocialMediaViewDto extends QueryDto {
  @SearchProperty(SocialMediaViewSearchables)
  override search?: FindOptionsOrder<SocialMedia>;
}
