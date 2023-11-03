import { ReadAddressDto } from './dto';
import { Rest } from './imports';

export const AddressEntityName = 'Address';
export const AddressViewName = 'Address';
export const AddressSingularPath = 'address';
export const AddressPluralPath = 'addresss';
export const AddressSingularViewPath = 'address-view';
export const AddressPluralViewPath = 'addresss-view';

export const AddressSearchables: string[] = [];
export const AddressUniqueFields: string[] = [];
export const AddressViewSearchables: string[] = [];

export const AddressRest = new Rest(
  AddressEntityName,
  AddressSingularPath,
  AddressPluralPath,
  ReadAddressDto
);
