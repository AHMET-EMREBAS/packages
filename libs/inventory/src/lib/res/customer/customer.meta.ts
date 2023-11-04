import { ReadCustomerDto } from './dto';
import { Rest } from './imports';
import { Customer } from './entity';

export const CustomerEntityName = 'Customer';
export const CustomerViewName = 'Customer';
export const CustomerSingularPath = 'customer';
export const CustomerPluralPath = 'customers';
export const CustomerSingularViewPath = 'customer-view';
export const CustomerPluralViewPath = 'customers-view';

export const CustomerSearchables: (keyof Customer)[] = [];
export const CustomerUniqueFields: (keyof Customer)[] = ['username'];
export const CustomerViewSearchables: string[] = [];

export const CustomerRest = new Rest(
  CustomerEntityName,
  CustomerSingularPath,
  CustomerPluralPath,
  ReadCustomerDto
);
