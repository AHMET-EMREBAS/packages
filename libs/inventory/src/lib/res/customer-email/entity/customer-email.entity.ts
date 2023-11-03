import { IDDto, BaseEntity, Column, Relation, Entity } from '../imports';
import { Customer } from '../../customer';

@Entity()
export class CustomerEmail extends BaseEntity {
  @Column({ type: 'string', required: true, format: 'email' })
  email?: string;

  @Relation({ target: Customer, type: 'owner' })
  user?: number;
}
