import { ConsoleLogger, Logger as __Logger } from '@nestjs/common';
import { appendFileSync, existsSync, writeFileSync } from 'fs';
import { join } from 'path';

export class Logger extends ConsoleLogger {
  private readonly logfilePath: string;
  constructor(context: string) {
    super(context, { timestamp: true });

    this.logfilePath = join(__dirname, `./${context}.log`);
  }

  override log(message: any, context?: string | undefined): void;
  override log(message: any, ...optionalParams: any[]): void;
  override log(message: unknown, context?: unknown, ...rest: unknown[]): void {
    this.error(message, '', context);
  }

  override error(
    message: any,
    stack?: string | undefined,
    context?: string | undefined
  ): void;

  override error(message: any, ...optionalParams: any[]): void;
  override error(
    message: unknown,
    stack?: unknown,
    context?: unknown,
    ...rest: any[]
  ): void {
    try {
      appendFileSync(
        this.logfilePath,
        `${new Date()}  ${context} | ${message} | ${stack}`
      );
    } catch (err) {
      try {
        writeFileSync(
          this.logfilePath,
          `${new Date()}  ${context} | ${message} | ${stack}`
        );
      } catch (err) {
        console.error('COULD NOT LOG!');
      }
    }

    super.error(message, stack, context);
  }
}
