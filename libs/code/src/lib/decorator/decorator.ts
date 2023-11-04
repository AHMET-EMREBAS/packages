import { ICode } from '../interface';
import { DecoratorOptions } from './options';
import { stringify } from '@techbir/utils';

export class Decorator<TOptions> implements ICode {
  constructor(public readonly options: DecoratorOptions<TOptions>) {}

  decoratorOptions() {
    const dOptions = this.options.options;

    if (dOptions) {
      return stringify(dOptions);
    }

    return '';
  }

  code(): string {
    return `@${this.options.decoratorName}(${this.decoratorOptions()})`;
  }
}
