import { BaseEntity, Column, Entity } from '../imports';

@Entity()
export class Product extends BaseEntity {
  @Column({ type: 'string', unique: true }) name!: string;
}
