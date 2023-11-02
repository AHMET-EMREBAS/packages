import { Controller, Get } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import {
  HealthCheckService,
  HttpHealthIndicator,
  HealthCheck,
  TypeOrmHealthIndicator,
} from '@nestjs/terminus';

@Controller('health')
export class AppHealthController {
  constructor(
    private health: HealthCheckService,
    private ormCheck: TypeOrmHealthIndicator,
    private http: HttpHealthIndicator
  ) {}

  @Get('app-server')
  @HealthCheck()
  @ApiOperation({ summary: 'Is client up?' })
  check() {
    return this.health.check([
      () => this.http.pingCheck('views', 'https://aemrebas.com'),
    ]);
  }

  @Get('database')
  @HealthCheck()
  @ApiOperation({ summary: 'Is database up?' })
  orm() {
    return this.health.check([() => this.ormCheck.pingCheck('orm')]);
  }
}
