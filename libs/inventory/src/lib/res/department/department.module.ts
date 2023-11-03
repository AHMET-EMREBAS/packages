import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Department, DepartmentView } from './entity';
import { DepartmentController } from './department.controller';
import { DepartmentService } from './department.service';
import { DepartmentViewService } from './department-view.service';
import { DepartmentViewController } from './department-view.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Department, DepartmentView])],
  controllers: [DepartmentController, DepartmentViewController],
  providers: [DepartmentService, DepartmentViewService],
})
export class DepartmentModule {}
