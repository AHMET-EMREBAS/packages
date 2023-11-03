import {
  Query,
  ValidationPipe,
  ParamId,
  Controller,
  ApiBearerAuth,
  ApiTags,
  ACCESS_TOKEN,
} from './imports';

import { SkillViewName, SkillRest as Rest } from './skill.meta';
import { SkillViewService } from './skill-view.service';
import { QuerySkillViewDto } from './dto';

@ApiBearerAuth(ACCESS_TOKEN)
@ApiTags(SkillViewName + 'Controller')
@Controller('view')
export class SkillViewController {
  constructor(private readonly service: SkillViewService) {}

  @Rest.Get()
  findAll(@Query(ValidationPipe) query: QuerySkillViewDto) {
    return this.service.findAll(query);
  }

  @Rest.GetById()
  findOneById(@ParamId() id: number) {
    return this.service.findOneById(id);
  }
}
