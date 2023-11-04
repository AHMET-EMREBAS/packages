import { ICode } from '../interface';
import { DecoratorOptions } from './options';
import { stringify } from '@techbir/utils';

export class Decorator<TOptions> implements ICode {
  constructor(public readonly options: DecoratorOptions<TOptions>) {}

  code(): string {
    return `@${this.options.decoratorName}(${stringify(this.options.options)})`;
  }
}
