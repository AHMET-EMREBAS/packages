import {
  Body,
  Param,
  Query,
  Controller,
  ValidationPipe,
  ParamId,
  RelationDto,
  UnsetRelationDto,
  __Rest,
} from './imports';
import { QueryCategoryDto, CreateCategoryDto } from './dto';
import { CategoryService } from './category.service';
import { CategoryMeta } from './category.meta';

const Rest = new __Rest(CategoryMeta.name);

@Controller(CategoryMeta.basePath)
export class CategoryController {
  constructor(private readonly service: CategoryService) {}

  @Rest.Get()
  findAll(@Query(ValidationPipe) query: QueryCategoryDto) {
    return this.service.findAll(query);
  }

  @Rest.GetById()
  findOneById(@ParamId() id: number) {
    return this.service.findOneById(id);
  }

  @Rest.Post()
  save(@Body(ValidationPipe) body: CreateCategoryDto) {
    return this.service.save(body);
  }

  @Rest.Delete()
  delete(@ParamId() id: number) {
    return this.service.delete(id);
  }

  @Rest.Set()
  setRelation(@Param(ValidationPipe) options: RelationDto) {
    return this.service.setRelation(options);
  }

  @Rest.Unset()
  unsetRelation(@Param(ValidationPipe) options: UnsetRelationDto) {
    return this.service.unsetRelation(options);
  }

  @Rest.Add()
  addRelation(@Param(ValidationPipe) options: RelationDto) {
    return this.service.addRelation(options);
  }

  @Rest.Remove()
  removeRelation(@Param(ValidationPipe) options: RelationDto) {
    return this.service.removeRelation(options);
  }
}
