import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User, UserView } from './entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserViewService } from './user-view.service';
import { UserViewController } from './user-view.controller';
import { Role } from '../role';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserView, Role])],
  controllers: [UserController, UserViewController],
  providers: [UserService, UserViewService],
})
export class UserModule {}
