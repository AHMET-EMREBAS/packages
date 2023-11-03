import { CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
import { ID } from './id';

export class TimestampEntity extends ID {
  @CreateDateColumn() createdAt!: Date;
  @UpdateDateColumn() updatedAt!: Date;
  @DeleteDateColumn() deletedAt!: Date;
}
