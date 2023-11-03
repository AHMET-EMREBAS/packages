import {
  Query,
  ValidationPipe,
  ParamId,
  Controller,
  ApiBearerAuth,
  ApiTags,
  ACCESS_TOKEN,
} from './imports';

import { DepartmentViewName, DepartmentRest as Rest } from './department.meta';
import { DepartmentViewService } from './department-view.service';
import { QueryDepartmentViewDto } from './dto';

@ApiBearerAuth(ACCESS_TOKEN)
@ApiTags(DepartmentViewName + 'Controller')
@Controller('view')
export class DepartmentViewController {
  constructor(private readonly service: DepartmentViewService) {}

  @Rest.Get()
  findAll(@Query(ValidationPipe) query: QueryDepartmentViewDto) {
    return this.service.findAll(query);
  }

  @Rest.GetById()
  findOneById(@ParamId() id: number) {
    return this.service.findOneById(id);
  }
}
