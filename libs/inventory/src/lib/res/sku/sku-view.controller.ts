import {
  Query,
  ValidationPipe,
  ParamId,
  Controller,
  ApiBearerAuth,
  ApiTags,
  ACCESS_TOKEN,
} from './imports';

import { SkuViewName, SkuRest as Rest } from './sku.meta';
import { SkuViewService } from './sku-view.service';
import { QuerySkuViewDto } from './dto';

@ApiBearerAuth(ACCESS_TOKEN)
@ApiTags(SkuViewName + 'Controller')
@Controller('view')
export class SkuViewController {
  constructor(private readonly service: SkuViewService) {}

  @Rest.Get()
  findAll(@Query(ValidationPipe) query: QuerySkuViewDto) {
    return this.service.findAll(query);
  }

  @Rest.GetById()
  findOneById(@ParamId() id: number) {
    return this.service.findOneById(id);
  }
}
