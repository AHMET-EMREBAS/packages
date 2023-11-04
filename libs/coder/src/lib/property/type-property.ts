import { InterfacePropertyCoder } from './interface-property';
import { InterfacePropertyOptions } from './options';

export class TypePropertyCoder<PropertyType> extends InterfacePropertyCoder<
  PropertyType,
  InterfacePropertyOptions<PropertyType>
> {}
