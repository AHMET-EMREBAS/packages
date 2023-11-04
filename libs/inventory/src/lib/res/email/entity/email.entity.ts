import { IDDto, BaseEntity, Column, Relation, Entity } from '../imports';
import { User } from '../../user';

@Entity()
export class Email extends BaseEntity {
  @Column({ type: 'string', required: true, unique: true, format: 'email' })
  email?: string;

  @Relation({ target: User, type: 'owner' })
  user?: number;
}
