import {
  Query,
  ValidationPipe,
  ParamId,
  EntityViewController,
} from './imports';

import { ProjectMeta, ProjectRest as Rest } from './project.meta';
import { ProjectViewService } from './project-view.service';
import { QueryProjectViewDto } from './dto';

@EntityViewController(ProjectMeta.viewEntityName)
export class ProjectViewController {
  constructor(private readonly service: ProjectViewService) {}

  @Rest.Get()
  findAll(@Query(ValidationPipe) query: QueryProjectViewDto) {
    return this.service.findAll(query);
  }

  @Rest.GetById()
  findOneById(@ParamId() id: number) {
    return this.service.findOneById(id);
  }
}
