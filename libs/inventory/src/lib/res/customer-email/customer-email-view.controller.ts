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
  CustomerEmailViewName,
  CustomerEmailRest as Rest,
} from './customer-email.meta';
import { CustomerEmailViewService } from './customer-email-view.service';
import { QueryCustomerEmailViewDto } from './dto';

@ApiBearerAuth(ACCESS_TOKEN)
@ApiTags(CustomerEmailViewName + 'Controller')
@Controller('view')
export class CustomerEmailViewController {
  constructor(private readonly service: CustomerEmailViewService) {}

  @Rest.Get()
  findAll(@Query(ValidationPipe) query: QueryCustomerEmailViewDto) {
    return this.service.findAll(query);
  }

  @Rest.GetById()
  findOneById(@ParamId() id: number) {
    return this.service.findOneById(id);
  }
}
