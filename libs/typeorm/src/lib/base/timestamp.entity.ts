import { CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
import { IDEntity } from './id.entity';

export class TimestampEntity extends IDEntity {
  @CreateDateColumn() createdAt!: Date;
  @UpdateDateColumn() updatedAt!: Date;
  @DeleteDateColumn() deletedAt!: Date;
}
