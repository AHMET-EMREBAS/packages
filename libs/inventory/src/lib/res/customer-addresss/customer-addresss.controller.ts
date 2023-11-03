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
  QueryCustomerAddresssDto,
  CreateCustomerAddresssDto,
  UpdateCustomerAddresssDto,
} from './dto';
import { CustomerAddresssService } from './customer-addresss.service';
import {
  CustomerAddresssEntityName,
  CustomerAddresssRest as Rest,
} from './customer-addresss.meta';

@ApiBearerAuth(ACCESS_TOKEN)
@ApiTags(CustomerAddresssEntityName + 'Controller')
@Controller()
export class CustomerAddresssController {
  constructor(private readonly service: CustomerAddresssService) {}

  @Rest.Get()
  findAll(@Query(ValidationPipe) query: QueryCustomerAddresssDto) {
    return this.service.findAll(query);
  }

  @Rest.GetById()
  findOneById(@ParamId() id: number) {
    return this.service.findOneById(id);
  }

  @Rest.Post()
  save(@Body(ValidationPipe) body: CreateCustomerAddresssDto) {
    return this.service.save(body);
  }

  @Rest.Update()
  update(
    @ParamId() id: number,
    @Body(ValidationPipe) body: UpdateCustomerAddresssDto
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
