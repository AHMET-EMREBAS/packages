import { IDDto, Dto, Property, BaseReadDto } from '../imports';

@Dto()
export class ReadShippingAddressDto extends BaseReadDto {
  @Property({ type: 'string', maxLength: 100 })
  unit!: string;

  @Property({ required: true, type: 'string', maxLength: 100 })
  street!: string;

  @Property({ required: true, type: 'string', maxLength: 100 })
  city!: string;

  @Property({ required: true, type: 'string', maxLength: 100 })
  state!: string;

  @Property({ required: true, type: 'string', maxLength: 100 })
  zip!: string;
}
