import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppLoggerService } from './app-logger/app-logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
    logger: ['error', 'warn', 'log'],
    bodyParser: true,
  });

  const config = new DocumentBuilder()
    .setTitle('NestJs Prisma API')
    .setDescription('Test NestJs Prisma API')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors();
  app.setGlobalPrefix('api/');
  app.useLogger(app.get(AppLoggerService));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
