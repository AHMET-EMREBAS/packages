import { Transform } from 'class-transformer';

export function PickKeyValue(
  keyKey: string,
  valueKey: string,
  defaultValue?: any
) {
  return Transform(({ obj }) => {
    const k = obj[keyKey];
    const v = obj[valueKey];
    if (k && v) {
      return { [k]: v };
    }
    return defaultValue;
  });
}
