import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Phone, PhoneView } from './entity';
import { PhoneController } from './phone.controller';
import { PhoneService } from './phone.service';
import { PhoneViewService } from './phone-view.service';
import { PhoneViewController } from './phone-view.controller';
import { User } from '../user';

@Module({
  imports: [TypeOrmModule.forFeature([Phone, PhoneView, User])],
  controllers: [PhoneController, PhoneViewController],
  providers: [PhoneService, PhoneViewService],
})
export class PhoneModule {}
