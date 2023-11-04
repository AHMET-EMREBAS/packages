import { ReadAddressDto } from './dto';
import { Rest } from './imports';
import { Address } from './entity';

export const AddressEntityName = 'Address';
export const AddressViewName = 'Address';
export const AddressSingularPath = 'address';
export const AddressPluralPath = 'addresss';
export const AddressSingularViewPath = 'address-view';
export const AddressPluralViewPath = 'addresss-view';

export const AddressSearchables: (keyof Address)[] = [
  'street',
  'state',
  'city',
  'zip',
];
export const AddressUniqueFields: (keyof Address)[] = [];
export const AddressViewSearchables: string[] = [];

export const AddressRest = new Rest(
  AddressEntityName,
  AddressSingularPath,
  AddressPluralPath,
  ReadAddressDto
);
