import { ReadPhoneDto } from './dto';
import { Rest } from './imports';
import { Phone } from './entity';

export const PhoneEntityName = 'Phone';
export const PhoneViewName = 'Phone';
export const PhoneSingularPath = 'phone';
export const PhonePluralPath = 'phones';
export const PhoneSingularViewPath = 'phone-view';
export const PhonePluralViewPath = 'phones-view';

export const PhoneSearchables: (keyof Phone)[] = [];
export const PhoneUniqueFields: (keyof Phone)[] = ['phone'];
export const PhoneViewSearchables: string[] = [];

export const PhoneRest = new Rest(
  PhoneEntityName,
  PhoneSingularPath,
  PhonePluralPath,
  ReadPhoneDto
);
