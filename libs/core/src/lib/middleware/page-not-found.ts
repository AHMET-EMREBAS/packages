import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  NotFoundException,
} from '@nestjs/common';
import { Response } from 'express';
/**
 * Redirect to 404 page on NotFoundException
 */
@Catch(NotFoundException)
export class PageNotFound implements ExceptionFilter {
  catch(_exception: NotFoundException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res: Response = ctx.getResponse();

    res.redirect('/views/page-not-found');
  }
}
