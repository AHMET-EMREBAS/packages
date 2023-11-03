import { ReadCustomerAddresssDto } from './dto';
import { Rest } from './imports';

export const CustomerAddresssEntityName = 'CustomerAddresss';
export const CustomerAddresssViewName = 'CustomerAddresss';
export const CustomerAddresssSingularPath = 'customer-addresss';
export const CustomerAddresssPluralPath = 'customer-addressss';
export const CustomerAddresssSingularViewPath = 'customer-addresss-view';
export const CustomerAddresssPluralViewPath = 'customer-addressss-view';

export const CustomerAddresssSearchables: string[] = [];
export const CustomerAddresssUniqueFields: string[] = [];
export const CustomerAddresssViewSearchables: string[] = [];

export const CustomerAddresssRest = new Rest(
  CustomerAddresssEntityName,
  CustomerAddresssSingularPath,
  CustomerAddresssPluralPath,
  ReadCustomerAddresssDto
);
