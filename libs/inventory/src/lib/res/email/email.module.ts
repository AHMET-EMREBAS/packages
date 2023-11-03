import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Email, EmailView } from './entity';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';
import { EmailViewService } from './email-view.service';
import { EmailViewController } from './email-view.controller';
import { User } from '../user';

@Module({
  imports: [TypeOrmModule.forFeature([Email, EmailView, User])],
  controllers: [EmailController, EmailViewController],
  providers: [EmailService, EmailViewService],
})
export class EmailModule {}
