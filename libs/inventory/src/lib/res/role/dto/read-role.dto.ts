import { IDDto, Dto, Property, BaseReadDto } from '../imports';

@Dto()
export class ReadRoleDto extends BaseReadDto {
  @Property({ required: true, type: 'string', minLength: 3, maxLength: 30 })
  role!: string;

  @Property({ type: 'object', target: IDDto, isArray: true, minimum: 1 })
  permissions?: IDDto[];
}
