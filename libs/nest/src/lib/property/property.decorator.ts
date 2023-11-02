import { CombinePropertyDecorators } from '@techbir/utils';
import { Expose } from 'class-transformer';
import { ApiProperty, ApiPropertyOptions } from '@nestjs/swagger';
import {
  IsEmail,
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsStrongPassword,
  IsUUID,
  Max,
  MaxLength,
  Min,
  MinLength,
  ValidateNested,
  ValidationOptions,
} from 'class-validator';
export function Property(options?: ApiPropertyOptions): PropertyDecorator {
  const decorators: PropertyDecorator[] = [
    Expose(),
    ApiProperty({ ...options, required: options?.required == true }),
  ];

  const pushIf = (value: any, dec: (value: any) => PropertyDecorator) => {
    if (value != false && value != undefined) {
      decorators.push(dec(value));
    }
  };

  if (options) {
    const {
      type,
      minLength,
      maxLength,
      minimum,
      maximum,
      format,
      enum: enums,
      required,
      isArray,
    } = options;

    const vo: ValidationOptions = { each: isArray };

    if (required === true) {
      decorators.push(IsNotEmpty());
    } else {
      decorators.push(IsOptional());
    }

    pushIf(minLength, (c) => MinLength(c, vo));
    pushIf(maxLength, (c) => MaxLength(c, vo));
    pushIf(minimum, (c) => Min(c, vo));
    pushIf(maximum, (c) => Max(c, vo));
    pushIf(enums, (c) => IsIn(c, vo));
    pushIf(format === 'email', (c) => IsEmail({}, vo));
    pushIf(format === 'password', (c) => IsStrongPassword({}, vo));
    pushIf(format === 'uuid', (c) => IsUUID('4', vo));
    pushIf(format === 'phone', (c) => IsPhoneNumber(undefined, vo));

    pushIf(type === 'object', (v) => ValidateNested(vo));
  }

  return CombinePropertyDecorators(...decorators);
}
