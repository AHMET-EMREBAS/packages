import { PartialType, Dto } from '../imports';
import { CreateContactDto } from './create-contact.dto';

@Dto()
export class UpdateContactDto extends PartialType(CreateContactDto) {}
