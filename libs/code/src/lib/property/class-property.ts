import { stringify } from '@techbir/utils';
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

  /**
   * Print decorators
   * @returns
   */
  override decorator(): string {
    if (this.decorators) {
      return this.decorators.map((e) => e.code()).join('\n') + '\n';
    }
    return '';
  }

  /**
   * Print default value
   * @returns
   */
  override defaultValue(): string {
    const dValue = this.options.defaultValue;

    if (dValue != undefined) {
      return `${stringify(dValue)}`;
    }
    return '';
  }
}
