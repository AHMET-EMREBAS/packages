import { ValidationPipe } from '@nestjs/common';

export const DtoValidationPipe = new ValidationPipe({
  transform: true,
});
