import { IDDto, BaseEntity, Column, Relation, Entity } from '../imports';
import { User } from '../../user';

@Entity()
export class Address extends BaseEntity {
  @Column({ type: 'string', required: true })
  street?: string;

  @Column({ type: 'string', required: true })
  city?: string;

  @Column({ type: 'string', required: true })
  state?: string;

  @Column({ type: 'string', required: true })
  zip?: string;

  @Relation({ target: User, type: 'owner' })
  user?: number;
}
