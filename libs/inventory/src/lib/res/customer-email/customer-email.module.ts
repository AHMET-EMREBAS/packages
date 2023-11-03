import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEmail, CustomerEmailView } from './entity';
import { CustomerEmailController } from './customer-email.controller';
import { CustomerEmailService } from './customer-email.service';
import { CustomerEmailViewService } from './customer-email-view.service';
import { CustomerEmailViewController } from './customer-email-view.controller';
import { Customer } from '../customer';

@Module({
  imports: [
    TypeOrmModule.forFeature([CustomerEmail, CustomerEmailView, Customer]),
  ],
  controllers: [CustomerEmailController, CustomerEmailViewController],
  providers: [CustomerEmailService, CustomerEmailViewService],
})
export class CustomerEmailModule {}
