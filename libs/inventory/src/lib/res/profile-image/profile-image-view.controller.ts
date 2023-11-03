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
  ProfileImageViewName,
  ProfileImageRest as Rest,
} from './profile-image.meta';
import { ProfileImageViewService } from './profile-image-view.service';
import { QueryProfileImageViewDto } from './dto';

@ApiBearerAuth(ACCESS_TOKEN)
@ApiTags(ProfileImageViewName + 'Controller')
@Controller('view')
export class ProfileImageViewController {
  constructor(private readonly service: ProfileImageViewService) {}

  @Rest.Get()
  findAll(@Query(ValidationPipe) query: QueryProfileImageViewDto) {
    return this.service.findAll(query);
  }

  @Rest.GetById()
  findOneById(@ParamId() id: number) {
    return this.service.findOneById(id);
  }
}
