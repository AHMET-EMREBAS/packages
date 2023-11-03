import {
  Query,
  ValidationPipe,
  ParamId,
  Controller,
  ApiBearerAuth,
  ApiTags,
  ACCESS_TOKEN,
} from './imports';

import { PriceLevelViewName, PriceLevelRest as Rest } from './price-level.meta';
import { PriceLevelViewService } from './price-level-view.service';
import { QueryPriceLevelViewDto } from './dto';

@ApiBearerAuth(ACCESS_TOKEN)
@ApiTags(PriceLevelViewName + 'Controller')
@Controller('view')
export class PriceLevelViewController {
  constructor(private readonly service: PriceLevelViewService) {}

  @Rest.Get()
  findAll(@Query(ValidationPipe) query: QueryPriceLevelViewDto) {
    return this.service.findAll(query);
  }

  @Rest.GetById()
  findOneById(@ParamId() id: number) {
    return this.service.findOneById(id);
  }
}
