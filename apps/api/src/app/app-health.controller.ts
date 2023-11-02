import { Controller, Get } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  HealthCheckService,
  HttpHealthIndicator,
  HealthCheck,
  TypeOrmHealthIndicator,
} from '@nestjs/terminus';

@ApiTags("HealthCheck")
@Controller('health')
export class AppHealthController {
  constructor(
    private health: HealthCheckService,
    private ormCheck: TypeOrmHealthIndicator,
    private http: HttpHealthIndicator,
    private e: EventEmitter2
  ) {}

  @Get('app-server')
  @HealthCheck()
  @ApiOperation({ summary: 'Is client up?' })
  check() {
    return this.health.check([
      async () => {
        const result = await this.http.pingCheck(
          'views',
          'https://aemrebas.com'
        );
        this.e.emit('app.up');
        return result;
      },
    ]);
  }

  @Get('database')
  @HealthCheck()
  @ApiOperation({ summary: 'Is database up?' })
  orm() {
    return this.health.check([() => this.ormCheck.pingCheck('orm')]);
  }
}
