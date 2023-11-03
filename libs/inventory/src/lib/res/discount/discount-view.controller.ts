import {
  Query,
  ValidationPipe,
  ParamId,
  Controller,
  ApiBearerAuth,
  ApiTags,
  ACCESS_TOKEN,
} from './imports';

import { DiscountViewName, DiscountRest as Rest } from './discount.meta';
import { DiscountViewService } from './discount-view.service';
import { QueryDiscountViewDto } from './dto';

@ApiBearerAuth(ACCESS_TOKEN)
@ApiTags(DiscountViewName + 'Controller')
@Controller('view')
export class DiscountViewController {
  constructor(private readonly service: DiscountViewService) {}

  @Rest.Get()
  findAll(@Query(ValidationPipe) query: QueryDiscountViewDto) {
    return this.service.findAll(query);
  }

  @Rest.GetById()
  findOneById(@ParamId() id: number) {
    return this.service.findOneById(id);
  }
}
