import {
  Query,
  ValidationPipe,
  ParamId,
  Controller,
  ApiBearerAuth,
  ApiTags,
  ACCESS_TOKEN,
} from './imports';

import { StoreViewName, StoreRest as Rest } from './store.meta';
import { StoreViewService } from './store-view.service';
import { QueryStoreViewDto } from './dto';

@ApiBearerAuth(ACCESS_TOKEN)
@ApiTags(StoreViewName + 'Controller')
@Controller('view')
export class StoreViewController {
  constructor(private readonly service: StoreViewService) {}

  @Rest.Get()
  findAll(@Query(ValidationPipe) query: QueryStoreViewDto) {
    return this.service.findAll(query);
  }

  @Rest.GetById()
  findOneById(@ParamId() id: number) {
    return this.service.findOneById(id);
  }
}
