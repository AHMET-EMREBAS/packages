import { IDDto, BaseEntity, Column, Relation, Entity } from '../imports';
import { User } from '../../user';

@Entity()
export class Achievement extends BaseEntity {
  @Column({ type: 'string', required: true })
  description?: string;

  @Relation({ target: User, type: 'owner' })
  user?: number;
}
