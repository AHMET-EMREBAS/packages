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
  AchievementViewName,
  AchievementRest as Rest,
} from './achievement.meta';
import { AchievementViewService } from './achievement-view.service';
import { QueryAchievementViewDto } from './dto';

@ApiBearerAuth(ACCESS_TOKEN)
@ApiTags(AchievementViewName + 'Controller')
@Controller('view')
export class AchievementViewController {
  constructor(private readonly service: AchievementViewService) {}

  @Rest.Get()
  findAll(@Query(ValidationPipe) query: QueryAchievementViewDto) {
    return this.service.findAll(query);
  }

  @Rest.GetById()
  findOneById(@ParamId() id: number) {
    return this.service.findOneById(id);
  }
}
