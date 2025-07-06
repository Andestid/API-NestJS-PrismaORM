import { Module } from '@nestjs/common';
import { usuarioModule } from './usuario/usuario.module';
import { mensajeModule } from './mensaje/mensaje.module';

@Module({
  imports: [usuarioModule, mensajeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
