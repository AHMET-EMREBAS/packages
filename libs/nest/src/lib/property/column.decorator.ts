import {
  Column as __Column,
  ColumnOptions as __ColumnOptions,
  ValueTransformer,
} from 'typeorm';
import { hashSync, genSaltSync } from 'bcrypt';
import { v4 } from 'uuid';

export type ColumnOptions = {
  type: 'string' | 'number' | 'boolean' | 'data' | 'object';
  unique?: true;
  required?: true;
  format?: 'uuid' | 'password';
};

const typeMap: { [key: string]: __ColumnOptions['type'] } = {
  string: 'varchar',
  number: 'numeric',
  boolean: 'boolean',
  date: 'date',
  object: 'varchar',
};

const PasswordTransformer: ValueTransformer = {
  from: (value) => value,
  to: (value) => value && hashSync(value, genSaltSync(8)),
};

const UUIDTransformer: ValueTransformer = {
  from: (value) => value,
  to: (value) => v4(),
};

export function Column(options: ColumnOptions) {
  const { type, unique, required, format } = options;

  const columnOptions: __ColumnOptions = {
    type: typeMap[type],
    unique,
    nullable: required === true ? false : true,
  };

  if (format === 'password') columnOptions.transformer = PasswordTransformer;
  if (format === 'uuid') columnOptions.transformer = UUIDTransformer;

  return __Column(columnOptions);
}
