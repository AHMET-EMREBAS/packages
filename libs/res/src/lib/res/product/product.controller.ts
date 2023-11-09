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
import { QueryProductDto, CreateProductDto, UpdateProductDto } from './dto';
import { ProductService } from './product.service';
import { ProductEntityName, ProductRest as Rest } from './product.meta';

@ApiBearerAuth(ACCESS_TOKEN)
@ApiTags(ProductEntityName + 'Controller')
@Controller()
export class ProductController {
  constructor(private readonly service: ProductService) {}

  @Rest.Get()
  findAll(@Query(ValidationPipe) query: QueryProductDto) {
    return this.service.findAll(query);
  }

  @Rest.Meta()
  meta() {
    return this.service.meta();
  }

  @Rest.GetById()
  findOneById(@ParamId() id: number) {
    return this.service.findOneById(id);
  }

  @Rest.Post()
  save(@Body(ValidationPipe) body: CreateProductDto) {
    return this.service.save(body);
  }

  @Rest.Update()
  update(@ParamId() id: number, @Body(ValidationPipe) body: UpdateProductDto) {
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
