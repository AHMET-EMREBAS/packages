import { ApiProperty } from '@nestjs/swagger';
import { CombinePropertyDecorators } from '@techbir/common';

import { ViewColumn as __ViewColumn } from 'typeorm';

export { ViewEntity, DataSource } from 'typeorm';

export type ViewColumnOptions = {
  type: 'string' | 'number' | 'integer' | 'boolean' | 'date' | 'object';
};

export function ViewColumn(options: ViewColumnOptions) {
  return CombinePropertyDecorators(ApiProperty(options), __ViewColumn());
}
