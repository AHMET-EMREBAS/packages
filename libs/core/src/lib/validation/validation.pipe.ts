import {
  HttpStatus,
  UnprocessableEntityException,
  ValidationPipe as __ValidationPipe,
} from '@nestjs/common';
import { ValidationError } from 'class-validator';

export const ValidationPipe = new __ValidationPipe({
  transform: true,
  errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
  exceptionFactory(errors) {
    throw new BadInputEntityException(errors);
  },
  stopAtFirstError: true,
  validationError: {
    target: false,
    value: false,
  },
});

export class BadInputEntityException extends UnprocessableEntityException {
  constructor(errros: Partial<ValidationError>[]) {
    super(errros);
  }
}
