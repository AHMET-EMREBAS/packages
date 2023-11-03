import { IDDto, BaseEntity, Column, Relation, Entity } from '../imports';
import { Customer } from '../../customer';

@Entity()
export class CustomerAddresss extends BaseEntity {
  @Column({ type: 'string', required: true })
  street?: string;

  @Column({ type: 'string', required: true })
  city?: string;

  @Column({ type: 'string', required: true })
  state?: string;

  @Column({ type: 'string', required: true })
  zip?: string;

  @Relation({ target: Customer, type: 'owner' })
  user?: number;
}
