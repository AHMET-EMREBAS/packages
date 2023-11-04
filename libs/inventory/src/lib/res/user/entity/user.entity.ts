import { IDDto, BaseEntity, Column, Relation, Entity } from '../imports';
import { Role } from '../../role';

@Entity()
export class User extends BaseEntity {
  @Column({ type: 'string', required: true })
  firstName?: string;

  @Column({ type: 'string', required: true })
  lastName?: string;

  @Column({ type: 'string', required: true, unique: true, format: 'email' })
  username?: string;

  @Column({ type: 'string', required: true, format: 'password' })
  password?: string;

  @Relation({ target: Role, type: 'subs' })
  roles?: IDDto[];
}
