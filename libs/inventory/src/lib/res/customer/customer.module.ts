import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer, CustomerView } from './entity';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { CustomerViewService } from './customer-view.service';
import { CustomerViewController } from './customer-view.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Customer, CustomerView])],
  controllers: [CustomerController, CustomerViewController],
  providers: [CustomerService, CustomerViewService],
})
export class CustomerModule {}
