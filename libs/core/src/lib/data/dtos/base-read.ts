import { v4 } from 'uuid';
import { Dto, Property } from '../../decorators';

@Dto()
export class BaseReadDto {
  @Property({ type: 'number', minimum: 1 }) id!: number;
  @Property({ type: 'string', default: new Date() }) createdAt!: Date;
  @Property({ type: 'string', default: new Date() }) updatedAt!: Date;
  @Property({ type: 'string', default: new Date() }) deletedAt!: Date;
  @Property({ type: 'number', default: new Date() }) createdBy!: number;
  @Property({ type: 'boolean' }) active!: number;
  @Property({ type: 'string', default: v4() }) uuid!: string;
}
