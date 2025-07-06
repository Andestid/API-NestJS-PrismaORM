import { Module } from "@nestjs/common";
import { usuarioController } from "./usuario.controller";
import { usuarioService } from "./usuario.service";
import { PrismaModule } from '../prisma/prisma.module';

@Module({
    controllers: [usuarioController],
    providers: [usuarioService],
    imports: [PrismaModule],
    exports: [usuarioService]
})
export class usuarioModule {}