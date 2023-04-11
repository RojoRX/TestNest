import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config(); // Carga las variables de entorno

  const app = await NestFactory.create(AppModule);

  const port = 3000; // Obtiene el puerto de las variables de entorno, o usa el valor por defecto 3000 si no está definido
  await app.listen(port);
}
bootstrap();
