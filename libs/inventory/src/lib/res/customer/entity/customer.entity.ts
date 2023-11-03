import { IDDto, BaseEntity, Column, Relation, Entity } from '../imports';

@Entity()
export class Customer extends BaseEntity {
  @Column({ type: 'string', required: true })
  firstName?: string;

  @Column({ type: 'string', required: true })
  lastName?: string;

  @Column({ type: 'string', required: true, format: 'email' })
  username?: string;

  @Column({ type: 'string', required: true, format: 'password' })
  password?: string;
}
