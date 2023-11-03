import { Query, Controller, ValidationPipe, ParamId, __Rest } from './imports';
import { ProductMeta } from './product.meta';
import { ProductViewService } from './product-view.service';
import { QueryProductViewDto } from './dto';
import { ProductView } from './entity';

const Rest = new __Rest(ProductMeta.name, ProductView);

@Controller(ProductMeta.viewPath)
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
