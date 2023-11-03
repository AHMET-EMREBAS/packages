import { IDDto, BaseEntity, Column, Relation, Entity } from '../imports';
import { Product } from '../../product';

@Entity()
export class ProductImage extends BaseEntity {
  @Column({ type: 'string', required: true })
  name?: string;

  @Column({ type: 'string', required: true })
  image?: string;

  @Relation({ target: Product, type: 'owner' })
  user?: number;
}
