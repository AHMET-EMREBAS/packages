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
import { QueryCustomerDto, CreateCustomerDto, UpdateCustomerDto } from './dto';
import { CustomerService } from './customer.service';
import { CustomerEntityName, CustomerRest as Rest } from './customer.meta';
import { Throttle } from '@nestjs/throttler';

@ApiBearerAuth(ACCESS_TOKEN)
@ApiTags(CustomerEntityName + 'Controller')
@Controller()
export class CustomerController {
  constructor(private readonly service: CustomerService) {}

  @Rest.Get()
  findAll(@Query(ValidationPipe) query: QueryCustomerDto) {
    return this.service.findAll(query);
  }

  @Rest.GetById()
  findOneById(@ParamId() id: number) {
    return this.service.findOneById(id);
  }

  @Throttle({ default: { limit: 1, ttl: 5000 } })
  @Rest.Post()
  save(@Body(ValidationPipe) body: CreateCustomerDto) {
    return this.service.save(body);
  }

  @Rest.Update()
  update(@ParamId() id: number, @Body(ValidationPipe) body: UpdateCustomerDto) {
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
