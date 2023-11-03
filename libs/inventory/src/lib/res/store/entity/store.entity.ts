import { IDDto, BaseEntity, Column, Relation, Entity } from '../imports';
import { PriceLevel } from '../../price-level';

@Entity()
export class Store extends BaseEntity {
  @Column({ type: 'string', required: true })
  name?: string;

  @Relation({ target: PriceLevel, type: 'sub' })
  priceLevel?: number;
}
