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
import { QueryQuantityDto, CreateQuantityDto, UpdateQuantityDto } from './dto';
import { QuantityService } from './quantity.service';
import { QuantityEntityName, QuantityRest as Rest } from './quantity.meta';

@ApiBearerAuth(ACCESS_TOKEN)
@ApiTags(QuantityEntityName + 'Controller')
@Controller()
export class QuantityController {
  constructor(private readonly service: QuantityService) {}

  @Rest.Get()
  findAll(@Query(ValidationPipe) query: QueryQuantityDto) {
    return this.service.findAll(query);
  }

  @Rest.GetById()
  findOneById(@ParamId() id: number) {
    return this.service.findOneById(id);
  }

  @Rest.Post()
  save(@Body(ValidationPipe) body: CreateQuantityDto) {
    return this.service.save(body);
  }

  @Rest.Update()
  update(@ParamId() id: number, @Body(ValidationPipe) body: UpdateQuantityDto) {
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
