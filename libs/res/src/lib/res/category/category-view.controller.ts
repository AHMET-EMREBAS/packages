import { Query, Controller, ValidationPipe, ParamId } from './imports';

import { CategoryMeta, CategoryRest as Rest } from './category.meta';
import { CategoryViewService } from './category-view.service';
import { QueryCategoryViewDto } from './dto';

@Controller(CategoryMeta.viewEntityName)
export class CategoryViewController {
  constructor(private readonly service: CategoryViewService) {}

  @Rest.Get()
  findAll(@Query(ValidationPipe) query: QueryCategoryViewDto) {
    return this.service.findAll(query);
  }

  @Rest.GetById()
  findOneById(@ParamId() id: number) {
    return this.service.findOneById(id);
  }
}
