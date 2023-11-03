import {
  Query,
  ValidationPipe,
  ParamId,
  Controller,
  ApiBearerAuth,
  ApiTags,
  ACCESS_TOKEN,
} from './imports';

import { OrderItemViewName, OrderItemRest as Rest } from './order-item.meta';
import { OrderItemViewService } from './order-item-view.service';
import { QueryOrderItemViewDto } from './dto';

@ApiBearerAuth(ACCESS_TOKEN)
@ApiTags(OrderItemViewName + 'Controller')
@Controller('view')
export class OrderItemViewController {
  constructor(private readonly service: OrderItemViewService) {}

  @Rest.Get()
  findAll(@Query(ValidationPipe) query: QueryOrderItemViewDto) {
    return this.service.findAll(query);
  }

  @Rest.GetById()
  findOneById(@ParamId() id: number) {
    return this.service.findOneById(id);
  }
}
