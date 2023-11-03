import {
  Query,
  ValidationPipe,
  ParamId,
  Controller,
  ApiBearerAuth,
  ApiTags,
  ACCESS_TOKEN,
} from './imports';

import { ExperienceViewName, ExperienceRest as Rest } from './experience.meta';
import { ExperienceViewService } from './experience-view.service';
import { QueryExperienceViewDto } from './dto';

@ApiBearerAuth(ACCESS_TOKEN)
@ApiTags(ExperienceViewName + 'Controller')
@Controller('view')
export class ExperienceViewController {
  constructor(private readonly service: ExperienceViewService) {}

  @Rest.Get()
  findAll(@Query(ValidationPipe) query: QueryExperienceViewDto) {
    return this.service.findAll(query);
  }

  @Rest.GetById()
  findOneById(@ParamId() id: number) {
    return this.service.findOneById(id);
  }
}
