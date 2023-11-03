import { ReadEmailDto } from './dto';
import { Rest } from './imports';

export const EmailEntityName = 'Email';
export const EmailViewName = 'Email';
export const EmailSingularPath = 'email';
export const EmailPluralPath = 'emails';
export const EmailSingularViewPath = 'email-view';
export const EmailPluralViewPath = 'emails-view';

export const EmailSearchables: string[] = [];
export const EmailUniqueFields: string[] = [];
export const EmailViewSearchables: string[] = [];

export const EmailRest = new Rest(
  EmailEntityName,
  EmailSingularPath,
  EmailPluralPath,
  ReadEmailDto
);
