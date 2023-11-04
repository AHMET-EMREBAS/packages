import { ReadShippingAddressDto } from './dto';
import { Rest } from './imports';
import { ShippingAddress } from './entity';

export const ShippingAddressEntityName = 'ShippingAddress';
export const ShippingAddressViewName = 'ShippingAddress';
export const ShippingAddressSingularPath = 'shipping-address';
export const ShippingAddressPluralPath = 'shipping-addresss';
export const ShippingAddressSingularViewPath = 'shipping-address-view';
export const ShippingAddressPluralViewPath = 'shipping-addresss-view';

export const ShippingAddressSearchables: (keyof ShippingAddress)[] = [];
export const ShippingAddressUniqueFields: (keyof ShippingAddress)[] = [];
export const ShippingAddressViewSearchables: string[] = [];

export const ShippingAddressRest = new Rest(
  ShippingAddressEntityName,
  ShippingAddressSingularPath,
  ShippingAddressPluralPath,
  ReadShippingAddressDto
);
