import { Module } from '@nestjs/common';
import collaborations from '../application/collaborations';
import handlers from '../infrastructure/handlers';
import databases from './databases';
import repositories from '../domain/repositories';
import { ThrottlerProvider, ThrottlerRootModule } from './throttler';

@Module({
  imports: [ThrottlerRootModule],
  controllers: [...handlers],
  providers: [
    ThrottlerProvider,
    ...databases,
    ...repositories,
    ...collaborations,
  ],
})
export class AppModule {}
