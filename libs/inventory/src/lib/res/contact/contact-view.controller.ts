import {
  Query,
  ValidationPipe,
  ParamId,
  Controller,
  ApiBearerAuth,
  ApiTags,
  ACCESS_TOKEN,
} from './imports';

import { ContactViewName, ContactRest as Rest } from './contact.meta';
import { ContactViewService } from './contact-view.service';
import { QueryContactViewDto } from './dto';

@ApiBearerAuth(ACCESS_TOKEN)
@ApiTags(ContactViewName + 'Controller')
@Controller('view')
export class ContactViewController {
  constructor(private readonly service: ContactViewService) {}

  @Rest.Get()
  findAll(@Query(ValidationPipe) query: QueryContactViewDto) {
    return this.service.findAll(query);
  }

  @Rest.GetById()
  findOneById(@ParamId() id: number) {
    return this.service.findOneById(id);
  }
}
