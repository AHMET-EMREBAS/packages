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
  QueryShippingAddressDto,
  CreateShippingAddressDto,
  UpdateShippingAddressDto,
} from './dto';
import { ShippingAddressService } from './shipping-address.service';
import {
  ShippingAddressEntityName,
  ShippingAddressRest as Rest,
} from './shipping-address.meta';
import { Throttle } from '@nestjs/throttler';

@ApiBearerAuth(ACCESS_TOKEN)
@ApiTags(ShippingAddressEntityName + 'Controller')
@Controller()
export class ShippingAddressController {
  constructor(private readonly service: ShippingAddressService) {}

  @Rest.Get()
  findAll(@Query(ValidationPipe) query: QueryShippingAddressDto) {
    return this.service.findAll(query);
  }

  @Rest.GetById()
  findOneById(@ParamId() id: number) {
    return this.service.findOneById(id);
  }

  @Throttle({ default: { limit: 1, ttl: 5000 } })
  @Rest.Post()
  save(@Body(ValidationPipe) body: CreateShippingAddressDto) {
    return this.service.save(body);
  }

  @Rest.Update()
  update(
    @ParamId() id: number,
    @Body(ValidationPipe) body: UpdateShippingAddressDto
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
