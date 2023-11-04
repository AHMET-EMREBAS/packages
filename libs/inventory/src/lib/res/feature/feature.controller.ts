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
import { QueryFeatureDto, CreateFeatureDto, UpdateFeatureDto } from './dto';
import { FeatureService } from './feature.service';
import { FeatureEntityName, FeatureRest as Rest } from './feature.meta';
import { Throttle } from '@nestjs/throttler';

@ApiBearerAuth(ACCESS_TOKEN)
@ApiTags(FeatureEntityName + 'Controller')
@Controller()
export class FeatureController {
  constructor(private readonly service: FeatureService) {}

  @Rest.Get()
  findAll(@Query(ValidationPipe) query: QueryFeatureDto) {
    return this.service.findAll(query);
  }

  @Rest.GetById()
  findOneById(@ParamId() id: number) {
    return this.service.findOneById(id);
  }

  @Throttle({ default: { limit: 1, ttl: 5000 } })
  @Rest.Post()
  save(@Body(ValidationPipe) body: CreateFeatureDto) {
    return this.service.save(body);
  }

  @Rest.Update()
  update(@ParamId() id: number, @Body(ValidationPipe) body: UpdateFeatureDto) {
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
