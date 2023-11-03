import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerPhone, CustomerPhoneView } from './entity';
import { CustomerPhoneController } from './customer-phone.controller';
import { CustomerPhoneService } from './customer-phone.service';
import { CustomerPhoneViewService } from './customer-phone-view.service';
import { CustomerPhoneViewController } from './customer-phone-view.controller';
import { Customer } from '../customer';

@Module({
  imports: [
    TypeOrmModule.forFeature([CustomerPhone, CustomerPhoneView, Customer]),
  ],
  controllers: [CustomerPhoneController, CustomerPhoneViewController],
  providers: [CustomerPhoneService, CustomerPhoneViewService],
})
export class CustomerPhoneModule {}
