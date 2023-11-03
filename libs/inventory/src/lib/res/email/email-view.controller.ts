import {
  Query,
  ValidationPipe,
  ParamId,
  Controller,
  ApiBearerAuth,
  ApiTags,
  ACCESS_TOKEN,
} from './imports';

import { EmailViewName, EmailRest as Rest } from './email.meta';
import { EmailViewService } from './email-view.service';
import { QueryEmailViewDto } from './dto';

@ApiBearerAuth(ACCESS_TOKEN)
@ApiTags(EmailViewName + 'Controller')
@Controller('view')
export class EmailViewController {
  constructor(private readonly service: EmailViewService) {}

  @Rest.Get()
  findAll(@Query(ValidationPipe) query: QueryEmailViewDto) {
    return this.service.findAll(query);
  }

  @Rest.GetById()
  findOneById(@ParamId() id: number) {
    return this.service.findOneById(id);
  }
}
