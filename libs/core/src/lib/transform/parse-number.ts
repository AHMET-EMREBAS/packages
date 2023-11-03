import { Transform } from 'class-transformer';

export function ParseNumberTransformer(defaultValue?: number) {
  return Transform(({ value }) => {
    if (value) {
      return parseFloat(value);
    }
    return defaultValue;
  });
}
