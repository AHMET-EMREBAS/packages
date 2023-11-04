import { AbstractProperty } from './abstract-property';
import { CommonPropertyOptions } from './options';

export class TypePropertyCoder<PropertyType> extends AbstractProperty<
  CommonPropertyOptions<PropertyType>
> {}
