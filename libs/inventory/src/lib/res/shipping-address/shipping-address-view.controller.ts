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
  ShippingAddressViewName,
  ShippingAddressRest as Rest,
} from './shipping-address.meta';
import { ShippingAddressViewService } from './shipping-address-view.service';
import { QueryShippingAddressViewDto } from './dto';

@ApiBearerAuth(ACCESS_TOKEN)
@ApiTags(ShippingAddressViewName + 'Controller')
@Controller('view')
export class ShippingAddressViewController {
  constructor(private readonly service: ShippingAddressViewService) {}

  @Rest.Get()
  findAll(@Query(ValidationPipe) query: QueryShippingAddressViewDto) {
    return this.service.findAll(query);
  }

  @Rest.GetById()
  findOneById(@ParamId() id: number) {
    return this.service.findOneById(id);
  }
}
