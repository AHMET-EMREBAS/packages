import { Body, Query } from '@nestjs/common';
import {
  Controller,
  DtoValidationPipe,
  ParamId,
  ParamRelationId,
  ParamRelationName,
  Rest as __Rest,
} from '@techbir/typeorm';
import { QueryProductDto } from './query-product.dto';
import { ProductService } from './product.service';
import { CreateProductDto } from './create-product.dto';
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
  setRelation(
    @ParamId() id: number,
    @ParamRelationName() rn: string,
    @ParamRelationId() rid: number
  ) {
    return this.service.setRelation(id, rn, rid);
  }

  @Rest.Unset()
  unsetRelation(@ParamId() id: number, @ParamRelationName() rn: string) {
    return this.service.unsetRelation(id, rn);
  }

  @Rest.Add()
  addRelation(
    @ParamId() id: number,
    @ParamRelationName() rn: string,
    @ParamRelationId() rid: number
  ) {
    return this.service.setRelation(id, rn, rid);
  }

  @Rest.Remove()
  removeRelation(
    @ParamId() id: number,
    @ParamRelationName() rn: string,
    @ParamRelationId() rid: number
  ) {
    return this.service.setRelation(id, rn, rid);
  }
}
