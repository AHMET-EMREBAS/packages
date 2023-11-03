import { IDDto, Dto, Property } from '../imports';

@Dto()
export class CreateRoleDto {
  @Property({ required: true, type: 'string', minLength: 3, maxLength: 30 })
  role!: string;

  @Property({ type: 'object', target: IDDto, isArray: true, minimum: 1 })
  permissions?: IDDto[];
}
