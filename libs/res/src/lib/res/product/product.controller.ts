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
import {
  ReadProductDto,
  QueryProductDto,
  CreateProductDto,
  UpdateProductDto,
} from './dto';
import { ProductService } from './product.service';
import { ProductMeta } from './product.meta';
import { DeleteDto } from '@techbir/core';

const Rest = new __Rest(ProductMeta.name, ReadProductDto);

@Controller(ProductMeta.basePath)
export class ProductController {
  constructor(private readonly service: ProductService) {}

  @Rest.Get()
  findAll(@Query(ValidationPipe) query: QueryProductDto) {
    return this.service.findAll(query);
  }

  @Rest.GetById()
  findOneById(@ParamId() id: number) {
    return this.service.findOneById(id);
  }

  @Rest.Post()
  save(@Body(ValidationPipe) body: CreateProductDto) {
    return this.service.save(body);
  }

  @Rest.Update()
  update(@ParamId() id: number, @Body(ValidationPipe) body: UpdateProductDto) {
    return this.service.update(id, body);
  }

  @Rest.Delete()
  delete(@ParamId() id: number, @Query() deleteOptions: DeleteDto) {
    if (deleteOptions.hard) {
      return this.service.hardDelete(id);
    }
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
