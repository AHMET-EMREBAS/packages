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
  CustomerPhoneViewName,
  CustomerPhoneRest as Rest,
} from './customer-phone.meta';
import { CustomerPhoneViewService } from './customer-phone-view.service';
import { QueryCustomerPhoneViewDto } from './dto';

@ApiBearerAuth(ACCESS_TOKEN)
@ApiTags(CustomerPhoneViewName + 'Controller')
@Controller('view')
export class CustomerPhoneViewController {
  constructor(private readonly service: CustomerPhoneViewService) {}

  @Rest.Get()
  findAll(@Query(ValidationPipe) query: QueryCustomerPhoneViewDto) {
    return this.service.findAll(query);
  }

  @Rest.GetById()
  findOneById(@ParamId() id: number) {
    return this.service.findOneById(id);
  }
}
