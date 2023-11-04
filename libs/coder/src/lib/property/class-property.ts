import { Decorator } from '../decorator';
import { AbstractProperty } from './abstract-property';
import { ClassPropertyOptions } from './options';

export class ClassProperty<
  TPropertyType,
  TDefaultValueType,
  TDecoratorOptions
> extends AbstractProperty<
  ClassPropertyOptions<TPropertyType, TDefaultValueType>
> {
  constructor(
    options: ClassPropertyOptions<TPropertyType, TDefaultValueType>,
    public readonly decorators?: Decorator<TDecoratorOptions>[]
  ) {
    super(options);
  }

  decorator(): string {
    if (this.decorators) {
      return this.decorators.map((e) => e.code()).join('\n');
    }
    return '';
  }
  
  defaultValue(): string {
    return `${this.options.defaultValue || ''}`;
  }
}
