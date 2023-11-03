import { IDDto, Dto, Property } from '../imports';

@Dto()
export class CreateShippingAddressDto {
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
