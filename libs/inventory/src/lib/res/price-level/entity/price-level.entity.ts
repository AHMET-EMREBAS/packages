import { IDDto, BaseEntity, Column, Relation, Entity } from '../imports';

@Entity()
export class PriceLevel extends BaseEntity {
  @Column({ type: 'string', required: true })
  priceLevel?: string;
}
