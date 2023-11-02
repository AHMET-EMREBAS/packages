import { Body, Param, Query } from '@nestjs/common';
import {
  Controller,
  DtoValidationPipe,
  ParamId,
  RelationDto,
  UnsetRelationDto,
  Rest as __Rest,
} from '@techbir/typeorm';
import { QueryDepartmentDto, CreateDepartmentDto } from './dto';
import { DepartmentService } from './department.service';
import { DepartmentMeta } from './department.meta';

const Rest = new __Rest(DepartmentMeta.name);

@Controller(DepartmentMeta.basePath)
export class DepartmentController {
  constructor(private readonly service: DepartmentService) {}

  @Rest.Get()
  findAll(@Query(DtoValidationPipe) query: QueryDepartmentDto) {
    return this.service.findAll(query);
  }

  @Rest.GetById()
  findOneById(@ParamId() id: number) {
    return this.service.findOneById(id);
  }

  @Rest.Post()
  save(@Body(DtoValidationPipe) body: CreateDepartmentDto) {
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
