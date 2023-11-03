import {
  Query,
  ValidationPipe,
  ParamId,
  Controller,
  ApiBearerAuth,
  ApiTags,
  ACCESS_TOKEN,
} from './imports';

import { RoleViewName, RoleRest as Rest } from './role.meta';
import { RoleViewService } from './role-view.service';
import { QueryRoleViewDto } from './dto';

@ApiBearerAuth(ACCESS_TOKEN)
@ApiTags(RoleViewName + 'Controller')
@Controller('view')
export class RoleViewController {
  constructor(private readonly service: RoleViewService) {}

  @Rest.Get()
  findAll(@Query(ValidationPipe) query: QueryRoleViewDto) {
    return this.service.findAll(query);
  }

  @Rest.GetById()
  findOneById(@ParamId() id: number) {
    return this.service.findOneById(id);
  }
}
