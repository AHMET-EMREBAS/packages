import {
  Query,
  ValidationPipe,
  ParamId,
  Controller,
  ApiBearerAuth,
  ApiTags,
  ACCESS_TOKEN,
} from './imports';

import { OrderViewName, OrderRest as Rest } from './order.meta';
import { OrderViewService } from './order-view.service';
import { QueryOrderViewDto } from './dto';

@ApiBearerAuth(ACCESS_TOKEN)
@ApiTags(OrderViewName + 'Controller')
@Controller('view')
export class OrderViewController {
  constructor(private readonly service: OrderViewService) {}

  @Rest.Get()
  findAll(@Query(ValidationPipe) query: QueryOrderViewDto) {
    return this.service.findAll(query);
  }

  @Rest.GetById()
  findOneById(@ParamId() id: number) {
    return this.service.findOneById(id);
  }
}
