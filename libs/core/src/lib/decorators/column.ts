import { Column as __Column, ColumnOptions as __ColumnOptions } from 'typeorm';

import { v4 } from 'uuid';
import {
  HashPasswordTransformer,
  UUIDTransformer,
  JSONTransformer,
} from '../transform';

export type ColumnOptions = {
  name?: string;
  type: 'string' | 'number' | 'boolean' | 'data' | 'object';
  unique?: true;
  required?: true;
  format?: 'uuid' | 'password' | 'json';
};

const typeMap: { [key: string]: __ColumnOptions['type'] } = {
  string: 'varchar',
  number: 'numeric',
  boolean: 'boolean',
  date: 'date',
  object: 'varchar',
};

export function Column(options: ColumnOptions) {
  const { type, unique, required, format } = options;

  const columnOptions: __ColumnOptions = {
    type: typeMap[type],
    unique,
    nullable: required === true ? false : true,
  };

  if (format === 'password')
    columnOptions.transformer = HashPasswordTransformer();

  if (format === 'uuid') columnOptions.transformer = UUIDTransformer();
  
  if (format === 'json') columnOptions.transformer = JSONTransformer();

  return __Column(columnOptions);
}
