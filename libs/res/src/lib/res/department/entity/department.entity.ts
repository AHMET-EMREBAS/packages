import { BaseEntity, Column, Entity } from '../imports';

@Entity()
export class Department extends BaseEntity {
  @Column({ type: 'string', unique: true }) name!: string;
}
