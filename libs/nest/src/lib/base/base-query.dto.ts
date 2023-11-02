import { Transform } from 'class-transformer';
import { Dto, Property } from '../property';
import { FindOptionsOrder, FindOptionsWhere } from 'typeorm';
// FindOptionsWhere<Entity>[] | FindOptionsWhere<Entity>;
// FindOptionsOrder<Entity>;
@Dto()
export class QueryDto {
  @Property({
    type: 'integer',
    minimum: 0,
    maximum: 100,
    description: 'Page length',
  })
  take? = 20;

  @Property({ type: 'integer', minimum: 0, description: 'Page offset' })
  skip? = 0;

  @Property({ type: 'boolean', description: 'Include deleted items' })
  withDeleted?: boolean;

  @Property({ type: 'string', description: 'Order by property' })
  orderBy?: string;

  @Property({ type: 'string', description: 'Order direction asc|desc' })
  orderDir?: string;

  @Property({
    description:
      'This field will be transformed from orderDir and orderBy fields.',
  })
  @Transform(({ obj }) => {
    const { orderDir, orderBy } = obj;
    if (orderDir && orderBy) {
      return { [orderBy]: orderDir };
    }
    return { id: 'asc' };
  })
  order?: FindOptionsOrder<any>;

  @Property({ type: 'string', maxLength: 100 })
  search?: FindOptionsWhere<any>[] | FindOptionsWhere<any>;
}
