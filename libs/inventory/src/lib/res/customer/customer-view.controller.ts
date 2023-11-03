import {
  Query,
  ValidationPipe,
  ParamId,
  Controller,
  ApiBearerAuth,
  ApiTags,
  ACCESS_TOKEN,
} from './imports';

import { CustomerViewName, CustomerRest as Rest } from './customer.meta';
import { CustomerViewService } from './customer-view.service';
import { QueryCustomerViewDto } from './dto';

@ApiBearerAuth(ACCESS_TOKEN)
@ApiTags(CustomerViewName + 'Controller')
@Controller('view')
export class CustomerViewController {
  constructor(private readonly service: CustomerViewService) {}

  @Rest.Get()
  findAll(@Query(ValidationPipe) query: QueryCustomerViewDto) {
    return this.service.findAll(query);
  }

  @Rest.GetById()
  findOneById(@ParamId() id: number) {
    return this.service.findOneById(id);
  }
}
