import { IDDto, BaseEntity, Column, Relation, Entity } from '../imports';
import { Achievement } from '../../achievement';
import { User } from '../../user';

@Entity()
export class Experience extends BaseEntity {
  @Column({ type: 'string', required: true })
  title?: string;

  @Column({ type: 'string', required: true })
  company?: string;

  @Column({ type: 'date', required: true })
  startDate?: Date;

  @Column({ type: 'date', required: true })
  endDate?: Date;

  @Relation({ target: Achievement, type: 'subs' })
  achievement?: IDDto[];

  @Relation({ target: User, type: 'owner' })
  user?: number;
}
