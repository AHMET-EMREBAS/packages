import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class AppEventListener {
  @OnEvent('app.up')
  onAppUp() {
    Logger.log('Application is up');
  }
}
