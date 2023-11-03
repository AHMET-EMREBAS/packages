import { IDDto, BaseEntity, Column, Relation, Entity } from '../imports';
import { Customer } from '../../customer';

@Entity()
export class CustomerPhone extends BaseEntity {
  @Column({ type: 'string', required: true, format: 'phone' })
  phone?: string;

  @Relation({ target: Customer, type: 'owner' })
  user?: number;
}
