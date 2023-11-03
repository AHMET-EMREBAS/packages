import {
  Query,
  ValidationPipe,
  ParamId,
  Controller,
  ApiBearerAuth,
  ApiTags,
  ACCESS_TOKEN,
} from './imports';

import { PermissionViewName, PermissionRest as Rest } from './permission.meta';
import { PermissionViewService } from './permission-view.service';
import { QueryPermissionViewDto } from './dto';

@ApiBearerAuth(ACCESS_TOKEN)
@ApiTags(PermissionViewName + 'Controller')
@Controller('view')
export class PermissionViewController {
  constructor(private readonly service: PermissionViewService) {}

  @Rest.Get()
  findAll(@Query(ValidationPipe) query: QueryPermissionViewDto) {
    return this.service.findAll(query);
  }

  @Rest.GetById()
  findOneById(@ParamId() id: number) {
    return this.service.findOneById(id);
  }
}
