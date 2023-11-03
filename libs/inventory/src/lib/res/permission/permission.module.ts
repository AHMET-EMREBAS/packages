import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Permission, PermissionView } from './entity';
import { PermissionController } from './permission.controller';
import { PermissionService } from './permission.service';
import { PermissionViewService } from './permission-view.service';
import { PermissionViewController } from './permission-view.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Permission, PermissionView])],
  controllers: [PermissionController, PermissionViewController],
  providers: [PermissionService, PermissionViewService],
})
export class PermissionModule {}
