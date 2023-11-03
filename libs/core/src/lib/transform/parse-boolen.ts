import { Transform } from 'class-transformer';

export function ParseBooleanTransformer(defaultValue?: boolean) {
  return Transform(({ value }) => {
    if (value === 'true') {
      return true;
    } else if (value === 'false') {
      return false;
    }

    return defaultValue;
  });
}
