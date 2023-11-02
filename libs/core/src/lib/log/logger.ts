import { ConsoleLogger } from '@nestjs/common';
import { appendFileSync, writeFileSync } from 'fs';

export class Logger extends ConsoleLogger {
  private readonly logfilePath: string;
  constructor(context: string) {
    super(context, { timestamp: true });

    this.logfilePath = `./logs/${context}-${new Date().toLocaleDateString()}.log`;
  }

  private persist(msg: string, stack: string) {
    try {
      appendFileSync(
        this.logfilePath,
        `${new Date()}  ${this.context} | ${msg} | ${stack}\n`
      );
    } catch (err) {
      try {
        writeFileSync(
          this.logfilePath,
          `${new Date()}  ${this.context} | ${msg} | ${stack}\n`
        );
      } catch (err) {
        console.error('COULD NOT LOG!');
      }
    }
  }

  override error(
    message: any,
    stack?: string | undefined,
    context?: string | undefined
  ): void;

  override error(message: any, ...optionalParams: any[]): void;
  override error(
    message: any,
    stack?: any,
    context?: any,
    ...rest: any[]
  ): void {
    this.persist(message, stack);
    super.error(message, stack, context);
  }
}
