import { Query, Controller, ValidationPipe, ParamId, __Rest } from './imports';

import { DepartmentMeta } from './department.meta';
import { DepartmentViewService } from './department-view.service';
import { QueryDepartmentViewDto } from './dto';
import { DepartmentView } from './entity';

const Rest = new __Rest(DepartmentMeta.name, DepartmentView);

@Controller(DepartmentMeta.viewPath)
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
