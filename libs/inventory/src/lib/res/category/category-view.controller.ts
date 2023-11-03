import {
  Query,
  ValidationPipe,
  ParamId,
  Controller,
  ApiBearerAuth,
  ApiTags,
  ACCESS_TOKEN,
} from './imports';

import { CategoryViewName, CategoryRest as Rest } from './category.meta';
import { CategoryViewService } from './category-view.service';
import { QueryCategoryViewDto } from './dto';
import { FindByDto } from '@techbir/core';

@ApiBearerAuth(ACCESS_TOKEN)
@ApiTags(CategoryViewName + 'Controller')
@Controller('view')
export class CategoryViewController {
  constructor(private readonly service: CategoryViewService) {}

  @Rest.Get()
  findAll(@Query(ValidationPipe) query: QueryCategoryViewDto) {
    return this.service.findAll(query);
  }

  @Rest.GetBy()
  findBy(@Query(ValidationPipe) query: FindByDto) {
    return this.service.findBy(query);
  }

  @Rest.GetById()
  findOneById(@ParamId() id: number) {
    return this.service.findOneById(id);
  }
}
