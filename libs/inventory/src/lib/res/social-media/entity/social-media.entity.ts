import { IDDto, BaseEntity, Column, Relation, Entity } from '../imports';
import { User } from '../../user';

@Entity()
export class SocialMedia extends BaseEntity {
  @Column({ type: 'string', required: true, unique: true })
  link?: string;

  @Relation({ target: User, type: 'owner' })
  user?: number;
}
