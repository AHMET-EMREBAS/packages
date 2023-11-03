import {
  Query,
  ValidationPipe,
  ParamId,
  Controller,
  ApiBearerAuth,
  ApiTags,
  ACCESS_TOKEN,
} from './imports';

import { PriceViewName, PriceRest as Rest } from './price.meta';
import { PriceViewService } from './price-view.service';
import { QueryPriceViewDto } from './dto';

@ApiBearerAuth(ACCESS_TOKEN)
@ApiTags(PriceViewName + 'Controller')
@Controller('view')
export class PriceViewController {
  constructor(private readonly service: PriceViewService) {}

  @Rest.Get()
  findAll(@Query(ValidationPipe) query: QueryPriceViewDto) {
    return this.service.findAll(query);
  }

  @Rest.GetById()
  findOneById(@ParamId() id: number) {
    return this.service.findOneById(id);
  }
}
