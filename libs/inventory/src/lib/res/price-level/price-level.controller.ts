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
import {
  QueryPriceLevelDto,
  CreatePriceLevelDto,
  UpdatePriceLevelDto,
} from './dto';
import { PriceLevelService } from './price-level.service';
import {
  PriceLevelEntityName,
  PriceLevelRest as Rest,
} from './price-level.meta';

@ApiBearerAuth(ACCESS_TOKEN)
@ApiTags(PriceLevelEntityName + 'Controller')
@Controller()
export class PriceLevelController {
  constructor(private readonly service: PriceLevelService) {}

  @Rest.Get()
  findAll(@Query(ValidationPipe) query: QueryPriceLevelDto) {
    return this.service.findAll(query);
  }

  @Rest.GetById()
  findOneById(@ParamId() id: number) {
    return this.service.findOneById(id);
  }

  @Rest.Post()
  save(@Body(ValidationPipe) body: CreatePriceLevelDto) {
    return this.service.save(body);
  }

  @Rest.Update()
  update(
    @ParamId() id: number,
    @Body(ValidationPipe) body: UpdatePriceLevelDto
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
