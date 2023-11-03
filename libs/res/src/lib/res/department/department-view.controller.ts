import { Query, Controller, ValidationPipe, ParamId } from './imports';

import { DepartmentMeta, DepartmentRest as Rest } from './department.meta';
import { DepartmentViewService } from './department-view.service';
import { QueryDepartmentViewDto } from './dto';

@Controller(DepartmentMeta.viewEntityName)
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
