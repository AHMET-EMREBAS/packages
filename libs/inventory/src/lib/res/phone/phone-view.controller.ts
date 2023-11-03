import {
  Query,
  ValidationPipe,
  ParamId,
  Controller,
  ApiBearerAuth,
  ApiTags,
  ACCESS_TOKEN,
} from './imports';

import { PhoneViewName, PhoneRest as Rest } from './phone.meta';
import { PhoneViewService } from './phone-view.service';
import { QueryPhoneViewDto } from './dto';

@ApiBearerAuth(ACCESS_TOKEN)
@ApiTags(PhoneViewName + 'Controller')
@Controller('view')
export class PhoneViewController {
  constructor(private readonly service: PhoneViewService) {}

  @Rest.Get()
  findAll(@Query(ValidationPipe) query: QueryPhoneViewDto) {
    return this.service.findAll(query);
  }

  @Rest.GetById()
  findOneById(@ParamId() id: number) {
    return this.service.findOneById(id);
  }
}
