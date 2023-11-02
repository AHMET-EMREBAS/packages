import { ValueTransformer } from 'typeorm';
import { v4 } from 'uuid';

export function UUIDTransformer(): ValueTransformer {
  return {
    to(value) {
      return v4();
    },
    from(value) {
      return value;
    },
  };
}
