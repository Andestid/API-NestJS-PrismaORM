import { Module } from '@nestjs/common';
import { mensajeService } from './mensaje.service';
import { mensajeController } from './mensaje.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { usuarioModule } from 'src/usuario/usuario.module';

@Module({
    controllers: [mensajeController],
    providers: [mensajeService],
    imports: [PrismaModule, usuarioModule ]
})
export class mensajeModule {}