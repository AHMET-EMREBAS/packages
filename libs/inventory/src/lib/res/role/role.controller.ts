import {
  Body,
  Param,
  Query,
  Controller,
  ValidationPipe,
  ParamId,
  RelationDto,
  UnsetRelationDto,
  ACCESS_TOKEN,
  ApiBearerAuth,
  ApiTags,
} from './imports';
import { QueryRoleDto, CreateRoleDto, UpdateRoleDto } from './dto';
import { RoleService } from './role.service';
import { RoleEntityName, RoleRest as Rest } from './role.meta';

@ApiBearerAuth(ACCESS_TOKEN)
@ApiTags(RoleEntityName + 'Controller')
@Controller()
export class RoleController {
  constructor(private readonly service: RoleService) {}

  @Rest.Get()
  findAll(@Query(ValidationPipe) query: QueryRoleDto) {
    return this.service.findAll(query);
  }

  @Rest.GetById()
  findOneById(@ParamId() id: number) {
    return this.service.findOneById(id);
  }

  @Rest.Post()
  save(@Body(ValidationPipe) body: CreateRoleDto) {
    return this.service.save(body);
  }

  @Rest.Update()
  update(@ParamId() id: number, @Body(ValidationPipe) body: UpdateRoleDto) {
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
