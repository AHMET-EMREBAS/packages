import { PrimaryGeneratedColumn } from 'typeorm';


export class IDEntity {
  @PrimaryGeneratedColumn() id!: number;
}
