import {
  Query,
  ValidationPipe,
  ParamId,
  Controller,
  ApiBearerAuth,
  ApiTags,
  ACCESS_TOKEN,
} from './imports';

import { QuantityViewName, QuantityRest as Rest } from './quantity.meta';
import { QuantityViewService } from './quantity-view.service';
import { QueryQuantityViewDto } from './dto';

@ApiBearerAuth(ACCESS_TOKEN)
@ApiTags(QuantityViewName + 'Controller')
@Controller('view')
export class QuantityViewController {
  constructor(private readonly service: QuantityViewService) {}

  @Rest.Get()
  findAll(@Query(ValidationPipe) query: QueryQuantityViewDto) {
    return this.service.findAll(query);
  }

  @Rest.GetById()
  findOneById(@ParamId() id: number) {
    return this.service.findOneById(id);
  }
}
