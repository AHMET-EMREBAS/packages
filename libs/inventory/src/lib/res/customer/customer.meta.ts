import { ReadCustomerDto } from './dto';
import { Rest } from './imports';

export const CustomerEntityName = 'Customer';
export const CustomerViewName = 'Customer';
export const CustomerSingularPath = 'customer';
export const CustomerPluralPath = 'customers';
export const CustomerSingularViewPath = 'customer-view';
export const CustomerPluralViewPath = 'customers-view';

export const CustomerSearchables: string[] = [];
export const CustomerUniqueFields: string[] = [];
export const CustomerViewSearchables: string[] = [];

export const CustomerRest = new Rest(
  CustomerEntityName,
  CustomerSingularPath,
  CustomerPluralPath,
  ReadCustomerDto
);
