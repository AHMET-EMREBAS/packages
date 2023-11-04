import { ReadContactDto } from './dto';
import { Rest } from './imports';
import { Contact } from './entity';

export const ContactEntityName = 'Contact';
export const ContactViewName = 'Contact';
export const ContactSingularPath = 'contact';
export const ContactPluralPath = 'contacts';
export const ContactSingularViewPath = 'contact-view';
export const ContactPluralViewPath = 'contacts-view';

export const ContactSearchables: (keyof Contact)[] = [];
export const ContactUniqueFields: (keyof Contact)[] = [];
export const ContactViewSearchables: string[] = [];

export const ContactRest = new Rest(
  ContactEntityName,
  ContactSingularPath,
  ContactPluralPath,
  ReadContactDto
);
