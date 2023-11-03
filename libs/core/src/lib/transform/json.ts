import { ValueTransformer } from 'typeorm';

export function JSONTransformer(): ValueTransformer {
  return {
    from(value) {
      return value && JSON.parse(value);
    },
    to(value) {
      return value && JSON.stringify(value);
    },
  };
}
