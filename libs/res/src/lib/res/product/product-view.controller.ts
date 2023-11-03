import { Query, Controller, ValidationPipe, ParamId } from './imports';

import { ProductMeta, ProductRest as Rest } from './product.meta';
import { ProductViewService } from './product-view.service';
import { QueryProductViewDto } from './dto';

@Controller(ProductMeta.viewEntityName)
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
