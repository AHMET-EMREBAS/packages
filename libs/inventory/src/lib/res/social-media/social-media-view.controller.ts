import {
  Query,
  ValidationPipe,
  ParamId,
  Controller,
  ApiBearerAuth,
  ApiTags,
  ACCESS_TOKEN,
} from './imports';

import {
  SocialMediaViewName,
  SocialMediaRest as Rest,
} from './social-media.meta';
import { SocialMediaViewService } from './social-media-view.service';
import { QuerySocialMediaViewDto } from './dto';

@ApiBearerAuth(ACCESS_TOKEN)
@ApiTags(SocialMediaViewName + 'Controller')
@Controller('view')
export class SocialMediaViewController {
  constructor(private readonly service: SocialMediaViewService) {}

  @Rest.Get()
  findAll(@Query(ValidationPipe) query: QuerySocialMediaViewDto) {
    return this.service.findAll(query);
  }

  @Rest.GetById()
  findOneById(@ParamId() id: number) {
    return this.service.findOneById(id);
  }
}
