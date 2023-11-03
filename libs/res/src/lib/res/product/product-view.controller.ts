import {
  Query,
  ValidationPipe,
  ParamId,
  Controller,
  ApiBearerAuth,
  ApiTags,
  ACCESS_TOKEN,
} from './imports';

import { ProductViewName, ProductRest as Rest } from './product.meta';
import { ProductViewService } from './product-view.service';
import { QueryProductViewDto } from './dto';

@ApiBearerAuth(ACCESS_TOKEN)
@ApiTags(ProductViewName + 'Controller')
@Controller('view')
export class ProductViewController {
  constructor(private readonly service: ProductViewService) {}

  @Rest.Get()
  findAll(@Query(ValidationPipe) query: QueryProductViewDto) {
    return this.service.findAll(query);
  }

  @Rest.GetById()
  findOneById(@ParamId() id: number) {
    return this.service.findOneById(id);
  }
}
