import { ReadCustomerPhoneDto } from './dto';
import { Rest } from './imports';
import { CustomerPhone } from './entity';

export const CustomerPhoneEntityName = 'CustomerPhone';
export const CustomerPhoneViewName = 'CustomerPhone';
export const CustomerPhoneSingularPath = 'customer-phone';
export const CustomerPhonePluralPath = 'customer-phones';
export const CustomerPhoneSingularViewPath = 'customer-phone-view';
export const CustomerPhonePluralViewPath = 'customer-phones-view';

export const CustomerPhoneSearchables: (keyof CustomerPhone)[] = [];
export const CustomerPhoneUniqueFields: (keyof CustomerPhone)[] = [];
export const CustomerPhoneViewSearchables: string[] = [];

export const CustomerPhoneRest = new Rest(
  CustomerPhoneEntityName,
  CustomerPhoneSingularPath,
  CustomerPhonePluralPath,
  ReadCustomerPhoneDto
);
