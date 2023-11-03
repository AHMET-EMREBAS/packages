import {
  Query,
  ValidationPipe,
  ParamId,
  Controller,
  ApiBearerAuth,
  ApiTags,
  ACCESS_TOKEN,
} from './imports';

import { FeatureViewName, FeatureRest as Rest } from './feature.meta';
import { FeatureViewService } from './feature-view.service';
import { QueryFeatureViewDto } from './dto';

@ApiBearerAuth(ACCESS_TOKEN)
@ApiTags(FeatureViewName + 'Controller')
@Controller('view')
export class FeatureViewController {
  constructor(private readonly service: FeatureViewService) {}

  @Rest.Get()
  findAll(@Query(ValidationPipe) query: QueryFeatureViewDto) {
    return this.service.findAll(query);
  }

  @Rest.GetById()
  findOneById(@ParamId() id: number) {
    return this.service.findOneById(id);
  }
}
