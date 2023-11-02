import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Department, DepartmentView } from './entity';
import { DepartmentController } from './department.controller';
import { DepartmentService } from './department.service';

@Module({
  imports: [TypeOrmModule.forFeature([Department, DepartmentView])],
  controllers: [DepartmentController],
  providers: [DepartmentService],
})
export class DepartmentModule {}
