import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role, RoleView } from './entity';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';
import { RoleViewService } from './role-view.service';
import { RoleViewController } from './role-view.controller';
import { Permission } from '../permission';

@Module({
  imports: [TypeOrmModule.forFeature([Role, RoleView, Permission])],
  controllers: [RoleController, RoleViewController],
  providers: [RoleService, RoleViewService],
})
export class RoleModule {}
