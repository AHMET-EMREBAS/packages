import { IDDto, BaseEntity, Column, Relation, Entity } from '../imports';

@Entity()
export class ShippingAddress extends BaseEntity {
  @Column({ type: 'string' })
  unit?: string;

  @Column({ type: 'string', required: true })
  street?: string;

  @Column({ type: 'string', required: true })
  city?: string;

  @Column({ type: 'string', required: true })
  state?: string;

  @Column({ type: 'string', required: true })
  zip?: string;
}
