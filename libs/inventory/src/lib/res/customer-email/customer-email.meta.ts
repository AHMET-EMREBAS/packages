import { ReadCustomerEmailDto } from './dto';
import { Rest } from './imports';
import { CustomerEmail } from './entity';

export const CustomerEmailEntityName = 'CustomerEmail';
export const CustomerEmailViewName = 'CustomerEmail';
export const CustomerEmailSingularPath = 'customer-email';
export const CustomerEmailPluralPath = 'customer-emails';
export const CustomerEmailSingularViewPath = 'customer-email-view';
export const CustomerEmailPluralViewPath = 'customer-emails-view';

export const CustomerEmailSearchables: (keyof CustomerEmail)[] = [];
export const CustomerEmailUniqueFields: (keyof CustomerEmail)[] = [];
export const CustomerEmailViewSearchables: string[] = [];

export const CustomerEmailRest = new Rest(
  CustomerEmailEntityName,
  CustomerEmailSingularPath,
  CustomerEmailPluralPath,
  ReadCustomerEmailDto
);
