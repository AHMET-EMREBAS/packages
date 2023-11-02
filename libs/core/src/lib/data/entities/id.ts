import { PrimaryGeneratedColumn } from 'typeorm';

export class ID {
  @PrimaryGeneratedColumn() id!: number;
}
