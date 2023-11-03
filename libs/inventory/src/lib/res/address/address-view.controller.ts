import {
  Query,
  ValidationPipe,
  ParamId,
  Controller,
  ApiBearerAuth,
  ApiTags,
  ACCESS_TOKEN,
} from './imports';

import { AddressViewName, AddressRest as Rest } from './address.meta';
import { AddressViewService } from './address-view.service';
import { QueryAddressViewDto } from './dto';

@ApiBearerAuth(ACCESS_TOKEN)
@ApiTags(AddressViewName + 'Controller')
@Controller('view')
export class AddressViewController {
  constructor(private readonly service: AddressViewService) {}

  @Rest.Get()
  findAll(@Query(ValidationPipe) query: QueryAddressViewDto) {
    return this.service.findAll(query);
  }

  @Rest.GetById()
  findOneById(@ParamId() id: number) {
    return this.service.findOneById(id);
  }
}
