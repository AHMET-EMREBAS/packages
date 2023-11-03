import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShippingAddress, ShippingAddressView } from './entity';
import { ShippingAddressController } from './shipping-address.controller';
import { ShippingAddressService } from './shipping-address.service';
import { ShippingAddressViewService } from './shipping-address-view.service';
import { ShippingAddressViewController } from './shipping-address-view.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ShippingAddress, ShippingAddressView])],
  controllers: [ShippingAddressController, ShippingAddressViewController],
  providers: [ShippingAddressService, ShippingAddressViewService],
})
export class ShippingAddressModule {}
