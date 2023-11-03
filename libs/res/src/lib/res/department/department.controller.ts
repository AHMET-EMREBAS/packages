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
  ReadDepartmentDto,
  QueryDepartmentDto,
  CreateDepartmentDto,
  UpdateDepartmentDto,
} from './dto';
import { DepartmentService } from './department.service';
import { DepartmentMeta } from './department.meta';

const Rest = new __Rest(DepartmentMeta.name, ReadDepartmentDto);

@Controller(DepartmentMeta.basePath)
export class DepartmentController {
  constructor(private readonly service: DepartmentService) {}

  @Rest.Get()
  findAll(@Query(ValidationPipe) query: QueryDepartmentDto) {
    return this.service.findAll(query);
  }

  @Rest.GetById()
  findOneById(@ParamId() id: number) {
    return this.service.findOneById(id);
  }

  @Rest.Post()
  save(@Body(ValidationPipe) body: CreateDepartmentDto) {
    return this.service.save(body);
  }

  @Rest.Update()
  update(
    @ParamId() id: number,
    @Body(ValidationPipe) body: UpdateDepartmentDto
  ) {
    return this.service.update(id, body);
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
