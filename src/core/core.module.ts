import { HttpModule, Module } from '@nestjs/common';
import { CoreService } from './core.service';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'https://labs-api.staging.it-kamasutra.com/api',
      headers: { Accept: 'application/json' },
    }),
  ],
  controllers: [],
  providers: [CoreService],
  exports: [CoreService],
})
export class CoreModule { }