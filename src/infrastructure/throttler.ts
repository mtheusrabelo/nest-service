import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';

export const ThrottlerRootModule = ThrottlerModule.forRoot([
  {
    ttl: 100 * 1000, // 100 seconds
    limit: 100,
  },
]);

export const ThrottlerProvider = {
  provide: APP_GUARD,
  useClass: ThrottlerGuard,
};
