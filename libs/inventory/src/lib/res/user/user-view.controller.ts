import {
  Query,
  ValidationPipe,
  ParamId,
  Controller,
  ApiBearerAuth,
  ApiTags,
  ACCESS_TOKEN,
} from './imports';

import { UserViewName, UserRest as Rest } from './user.meta';
import { UserViewService } from './user-view.service';
import { QueryUserViewDto } from './dto';

@ApiBearerAuth(ACCESS_TOKEN)
@ApiTags(UserViewName + 'Controller')
@Controller('view')
export class UserViewController {
  constructor(private readonly service: UserViewService) {}

  @Rest.Get()
  findAll(@Query(ValidationPipe) query: QueryUserViewDto) {
    return this.service.findAll(query);
  }

  @Rest.GetById()
  findOneById(@ParamId() id: number) {
    return this.service.findOneById(id);
  }
}
