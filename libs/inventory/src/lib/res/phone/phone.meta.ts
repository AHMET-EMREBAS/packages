import { ReadPhoneDto } from './dto';
import { Rest } from './imports';

export const PhoneEntityName = 'Phone';
export const PhoneViewName = 'Phone';
export const PhoneSingularPath = 'phone';
export const PhonePluralPath = 'phones';
export const PhoneSingularViewPath = 'phone-view';
export const PhonePluralViewPath = 'phones-view';

export const PhoneSearchables: string[] = [];
export const PhoneUniqueFields: string[] = [];
export const PhoneViewSearchables: string[] = [];

export const PhoneRest = new Rest(
  PhoneEntityName,
  PhoneSingularPath,
  PhonePluralPath,
  ReadPhoneDto
);
