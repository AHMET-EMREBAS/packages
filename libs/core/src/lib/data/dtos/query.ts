import { Transform } from 'class-transformer';
import { FindOptionsOrder, FindOptionsWhere, ILike } from 'typeorm';
import { Dto, Property } from '../../decorators';
import {
  ParseBooleanTransformer,
  ParseNumberTransformer,
  PickKeyValue,
} from '../../transform';

@Dto()
export class QueryDto {
  @Property({
    type: 'integer',
    minimum: 0,
    maximum: 100,
    description: 'Page length',
  })
  @ParseNumberTransformer(20)
  take?: number;

  @Property({ type: 'integer', minimum: 0, description: 'Page offset' })
  @ParseNumberTransformer(0)
  skip? = 0;

  @Property({ type: 'boolean', description: 'Include deleted items' })
  @ParseBooleanTransformer(false)
  withDeleted?: boolean;

  @Property({ type: 'string', description: 'Order by property' })
  orderBy?: string;

  @Property({ type: 'string', description: 'Order direction asc|desc' })
  orderDir?: string;

  @Property({
    type: 'object',
    description:
      'This field will be transformed from orderDir and orderBy fields.',
  })
  @PickKeyValue('orderBy', 'orderDir', { id: 'asc' })
  order?: FindOptionsOrder<any>;

  @Property({ type: 'string', novalidate: true })
  search?: FindOptionsWhere<any>[] | FindOptionsWhere<any>;

  @Property({ type: 'string', description: 'Find by key and value' })
  key: string;

  @Property({ type: 'string', description: 'Find by key and value' })
  value: string;

  @Property({ type: 'object' })
  @Transform(({ obj }) => {
    if (obj.key && obj.value) {
      return { [obj.key]: ILike(obj.value) };
    }
    return undefined;
  })
  findBy: FindOptionsWhere<any>;
}
