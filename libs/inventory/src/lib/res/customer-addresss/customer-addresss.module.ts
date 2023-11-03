import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerAddresss, CustomerAddresssView } from './entity';
import { CustomerAddresssController } from './customer-addresss.controller';
import { CustomerAddresssService } from './customer-addresss.service';
import { CustomerAddresssViewService } from './customer-addresss-view.service';
import { CustomerAddresssViewController } from './customer-addresss-view.controller';
import { Customer } from '../customer';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CustomerAddresss,
      CustomerAddresssView,
      Customer,
    ]),
  ],
  controllers: [CustomerAddresssController, CustomerAddresssViewController],
  providers: [CustomerAddresssService, CustomerAddresssViewService],
})
export class CustomerAddresssModule {}
