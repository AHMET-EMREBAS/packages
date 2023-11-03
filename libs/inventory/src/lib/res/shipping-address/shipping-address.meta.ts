import { ReadShippingAddressDto } from './dto';
import { Rest } from './imports';

export const ShippingAddressEntityName = 'ShippingAddress';
export const ShippingAddressViewName = 'ShippingAddress';
export const ShippingAddressSingularPath = 'shipping-address';
export const ShippingAddressPluralPath = 'shipping-addresss';
export const ShippingAddressSingularViewPath = 'shipping-address-view';
export const ShippingAddressPluralViewPath = 'shipping-addresss-view';

export const ShippingAddressSearchables: string[] = [];
export const ShippingAddressUniqueFields: string[] = [];
export const ShippingAddressViewSearchables: string[] = [];

export const ShippingAddressRest = new Rest(
  ShippingAddressEntityName,
  ShippingAddressSingularPath,
  ShippingAddressPluralPath,
  ReadShippingAddressDto
);
