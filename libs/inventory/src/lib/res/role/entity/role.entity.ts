import { IDDto, BaseEntity, Column, Relation, Entity } from '../imports';
import { Permission } from '../../permission';

@Entity()
export class Role extends BaseEntity {
  @Column({ type: 'string', required: true })
  role?: string;

  @Relation({ target: Permission, type: 'subs' })
  permissions?: IDDto[];
}
