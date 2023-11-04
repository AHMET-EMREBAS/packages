import { AbstractProperty } from './abstract-property';
import { InterfacePropertyOptions } from './options';

export class InterfacePropertyCoder<
  PropertyType,
  Options extends InterfacePropertyOptions<PropertyType>
> extends AbstractProperty<Options> {
  constructor(options: Options) {
    super(options);
  }
}
