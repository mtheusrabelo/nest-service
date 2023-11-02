import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export function setupSwagger(app) {
  const config = new DocumentBuilder()
    .setTitle('Nest Service')
    .setDescription('Modern Domain Service on top of NestJS')
    .setVersion('1.0')
    .addGlobalParameters({
      name: 'Referer',
      in: 'header',
    })
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);
}
