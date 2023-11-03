import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact, ContactView } from './entity';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';
import { ContactViewService } from './contact-view.service';
import { ContactViewController } from './contact-view.controller';
import { Role } from '../role';

@Module({
  imports: [TypeOrmModule.forFeature([Contact, ContactView, Role])],
  controllers: [ContactController, ContactViewController],
  providers: [ContactService, ContactViewService],
})
export class ContactModule {}
