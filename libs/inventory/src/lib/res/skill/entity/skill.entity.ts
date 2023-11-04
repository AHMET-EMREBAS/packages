import { IDDto, BaseEntity, Column, Relation, Entity } from '../imports';
import { User } from '../../user';

@Entity()
export class Skill extends BaseEntity {
  @Column({ type: 'string', required: true, unique: true })
  skill?: string;

  @Relation({ target: User, type: 'owner' })
  user?: number;
}
