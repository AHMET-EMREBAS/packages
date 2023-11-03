import { IDDto, BaseEntity, Column, Relation, Entity } from '../imports';
import { User } from '../../user';

@Entity()
export class ProfileImage extends BaseEntity {
  @Column({ type: 'string', required: true })
  name?: string;

  @Column({ type: 'string', required: true })
  image?: string;

  @Relation({ target: User, type: 'owner' })
  user?: number;
}
