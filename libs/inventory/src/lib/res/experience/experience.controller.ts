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
  QueryExperienceDto,
  CreateExperienceDto,
  UpdateExperienceDto,
} from './dto';
import { ExperienceService } from './experience.service';
import {
  ExperienceEntityName,
  ExperienceRest as Rest,
} from './experience.meta';

@ApiBearerAuth(ACCESS_TOKEN)
@ApiTags(ExperienceEntityName + 'Controller')
@Controller()
export class ExperienceController {
  constructor(private readonly service: ExperienceService) {}

  @Rest.Get()
  findAll(@Query(ValidationPipe) query: QueryExperienceDto) {
    return this.service.findAll(query);
  }

  @Rest.GetById()
  findOneById(@ParamId() id: number) {
    return this.service.findOneById(id);
  }

  @Rest.Post()
  save(@Body(ValidationPipe) body: CreateExperienceDto) {
    return this.service.save(body);
  }

  @Rest.Update()
  update(
    @ParamId() id: number,
    @Body(ValidationPipe) body: UpdateExperienceDto
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
