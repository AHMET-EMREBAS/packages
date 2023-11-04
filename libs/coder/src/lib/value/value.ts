import { ICode } from '../interface';
import { stringifyByOptions } from '@techbir/utils';
export type ValueType = 'string' | 'number' | 'date' | 'boolean' | 'object';

export class ValueOptions<TValue = unknown> {
  type: ValueType;
  value: TValue;
  isArray?: boolean;
}

export class Value<TValue> implements ICode {
  constructor(public readonly options: ValueOptions<TValue>) {}

  code(): string {
    return stringifyByOptions(this.options);
  }
}
