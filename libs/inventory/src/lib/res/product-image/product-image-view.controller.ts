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
  ProductImageViewName,
  ProductImageRest as Rest,
} from './product-image.meta';
import { ProductImageViewService } from './product-image-view.service';
import { QueryProductImageViewDto } from './dto';

@ApiBearerAuth(ACCESS_TOKEN)
@ApiTags(ProductImageViewName + 'Controller')
@Controller('view')
export class ProductImageViewController {
  constructor(private readonly service: ProductImageViewService) {}

  @Rest.Get()
  findAll(@Query(ValidationPipe) query: QueryProductImageViewDto) {
    return this.service.findAll(query);
  }

  @Rest.GetById()
  findOneById(@ParamId() id: number) {
    return this.service.findOneById(id);
  }
}
