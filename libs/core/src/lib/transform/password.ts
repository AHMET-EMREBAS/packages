import { genSaltSync, hashSync } from 'bcrypt';
import { ValueTransformer } from 'typeorm';

export function HashPasswordTransformer(): ValueTransformer {
  return {
    from(value) {
      return value;
    },
    to(value) {
      return value && hashSync(value, genSaltSync(8));
    },
  };
}
