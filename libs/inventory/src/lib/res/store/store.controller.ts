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
import { QueryStoreDto, CreateStoreDto, UpdateStoreDto } from './dto';
import { StoreService } from './store.service';
import { StoreEntityName, StoreRest as Rest } from './store.meta';

@ApiBearerAuth(ACCESS_TOKEN)
@ApiTags(StoreEntityName + 'Controller')
@Controller()
export class StoreController {
  constructor(private readonly service: StoreService) {}

  @Rest.Get()
  findAll(@Query(ValidationPipe) query: QueryStoreDto) {
    return this.service.findAll(query);
  }

  @Rest.GetById()
  findOneById(@ParamId() id: number) {
    return this.service.findOneById(id);
  }

  @Rest.Post()
  save(@Body(ValidationPipe) body: CreateStoreDto) {
    return this.service.save(body);
  }

  @Rest.Update()
  update(@ParamId() id: number, @Body(ValidationPipe) body: UpdateStoreDto) {
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
