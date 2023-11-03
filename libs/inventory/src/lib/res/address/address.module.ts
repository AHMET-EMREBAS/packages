import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address, AddressView } from './entity';
import { AddressController } from './address.controller';
import { AddressService } from './address.service';
import { AddressViewService } from './address-view.service';
import { AddressViewController } from './address-view.controller';
import { User } from '../user';

@Module({
  imports: [TypeOrmModule.forFeature([Address, AddressView, User])],
  controllers: [AddressController, AddressViewController],
  providers: [AddressService, AddressViewService],
})
export class AddressModule {}
