import {
  Body,
  Param,
  Query,
  Controller,
  DtoValidationPipe,
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
  findAll(@Query(DtoValidationPipe) query: QueryCategoryDto) {
    return this.service.findAll(query);
  }

  @Rest.GetById()
  findOneById(@ParamId() id: number) {
    return this.service.findOneById(id);
  }

  @Rest.Post()
  save(@Body(DtoValidationPipe) body: CreateCategoryDto) {
    return this.service.save(body);
  }

  @Rest.Delete()
  delete(@ParamId() id: number) {
    return this.service.delete(id);
  }

  @Rest.Set()
  setRelation(@Param(DtoValidationPipe) options: RelationDto) {
    return this.service.setRelation(options);
  }

  @Rest.Unset()
  unsetRelation(@Param(DtoValidationPipe) options: UnsetRelationDto) {
    return this.service.unsetRelation(options);
  }

  @Rest.Add()
  addRelation(@Param(DtoValidationPipe) options: RelationDto) {
    return this.service.addRelation(options);
  }

  @Rest.Remove()
  removeRelation(@Param(DtoValidationPipe) options: RelationDto) {
    return this.service.removeRelation(options);
  }
}
