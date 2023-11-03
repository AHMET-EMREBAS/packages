import { IDDto, BaseEntity, Column, Relation, Entity } from '../imports';
import { User } from '../../user';

@Entity()
export class ProductImage extends BaseEntity {
  @Column({ type: 'string', required: true })
  name?: string;

  @Column({ type: 'string', required: true })
  image?: string;

  @Relation({ target: User, type: 'owner' })
  user?: number;
}
