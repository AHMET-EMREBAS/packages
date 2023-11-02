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
import { QueryProductDto, CreateProductDto } from './dto';
import { ProductService } from './product.service';
import { ProductMeta } from './product.meta';

const Rest = new __Rest(ProductMeta.name);

@Controller(ProductMeta.basePath)
export class ProductController {
  constructor(private readonly service: ProductService) {}

  @Rest.Get()
  findAll(@Query(DtoValidationPipe) query: QueryProductDto) {
    return this.service.findAll(query);
  }

  @Rest.GetById()
  findOneById(@ParamId() id: number) {
    return this.service.findOneById(id);
  }

  @Rest.Post()
  save(@Body(DtoValidationPipe) body: CreateProductDto) {
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
