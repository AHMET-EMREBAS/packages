import { ICode } from '../interface';
import { DecoratorOptions } from './options';

export class Decorator<TOptions> implements ICode {
  constructor(public readonly options: DecoratorOptions<TOptions>) {}

  decoratorOptions() {
    const stringify = this.options.stringifyOptions;
    if (stringify) {
      return stringify(this.options.options);
    }
    throw new Error('Please provide StringifyDecoratorOptions function');
  }

  code(): string {
    return `@${this.options.decoratorName}(${this.decoratorOptions()})`;
  }
}
