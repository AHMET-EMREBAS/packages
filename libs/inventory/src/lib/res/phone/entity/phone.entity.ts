import { IDDto, BaseEntity, Column, Relation, Entity } from '../imports';
import { User } from '../../user';

@Entity()
export class Phone extends BaseEntity {
  @Column({ type: 'string', required: true, format: 'phone' })
  phone?: string;

  @Relation({ target: User, type: 'owner' })
  user?: number;
}
