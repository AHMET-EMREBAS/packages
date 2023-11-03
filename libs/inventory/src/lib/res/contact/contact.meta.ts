import { ReadContactDto } from './dto';
import { Rest } from './imports';

export const ContactEntityName = 'Contact';
export const ContactViewName = 'Contact';
export const ContactSingularPath = 'contact';
export const ContactPluralPath = 'contacts';
export const ContactSingularViewPath = 'contact-view';
export const ContactPluralViewPath = 'contacts-view';

export const ContactSearchables: string[] = [];
export const ContactUniqueFields: string[] = [];
export const ContactViewSearchables: string[] = [];

export const ContactRest = new Rest(
  ContactEntityName,
  ContactSingularPath,
  ContactPluralPath,
  ReadContactDto
);
