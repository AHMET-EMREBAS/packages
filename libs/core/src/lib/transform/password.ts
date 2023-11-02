import { genSaltSync, hashSync } from 'bcrypt';
import { ValueTransformer } from 'typeorm';

export const HashPasswordTransformer: ValueTransformer = {
  from: (value) => value,
  to: (value) => value && hashSync(value, genSaltSync(8)),
};
