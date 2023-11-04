import { ReadEmailDto } from './dto';
import { Rest } from './imports';
import { Email } from './entity';

export const EmailEntityName = 'Email';
export const EmailViewName = 'Email';
export const EmailSingularPath = 'email';
export const EmailPluralPath = 'emails';
export const EmailSingularViewPath = 'email-view';
export const EmailPluralViewPath = 'emails-view';

export const EmailSearchables: (keyof Email)[] = [];
export const EmailUniqueFields: (keyof Email)[] = ['email'];
export const EmailViewSearchables: string[] = [];

export const EmailRest = new Rest(
  EmailEntityName,
  EmailSingularPath,
  EmailPluralPath,
  ReadEmailDto
);
