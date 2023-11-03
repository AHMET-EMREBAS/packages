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
  CustomerAddresssViewName,
  CustomerAddresssRest as Rest,
} from './customer-addresss.meta';
import { CustomerAddresssViewService } from './customer-addresss-view.service';
import { QueryCustomerAddresssViewDto } from './dto';

@ApiBearerAuth(ACCESS_TOKEN)
@ApiTags(CustomerAddresssViewName + 'Controller')
@Controller('view')
export class CustomerAddresssViewController {
  constructor(private readonly service: CustomerAddresssViewService) {}

  @Rest.Get()
  findAll(@Query(ValidationPipe) query: QueryCustomerAddresssViewDto) {
    return this.service.findAll(query);
  }

  @Rest.GetById()
  findOneById(@ParamId() id: number) {
    return this.service.findOneById(id);
  }
}
