import 'dotenv/config';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './infrastructure/app.module';
import helmet from 'helmet';
import { setupSwagger } from './swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: console,
  });

  setupSwagger(app);
  app.use(helmet());

  const port = Number(process.env['PORT']) || 3000;
  await app.listen(port);
}

bootstrap().catch((error) => {
  console.error(error);
  process.exit(1);
});
