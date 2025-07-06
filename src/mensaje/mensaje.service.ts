import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { usuarioService } from '../usuario/usuario.service'; // nombre correcto

@Injectable()
export class mensajeService {
  constructor(private prisma: PrismaService, private usuarioService: usuarioService) {}

  async create(data: CreateMessageDto) {
    const user = await this.usuarioService.findByEmail(data.email);
    if (!user) throw new NotFoundException('Usuario no encontrado');

    return this.prisma.message.create({
      data: {
        content: data.content,
        userId: user.id,
      },
    });
  }
}
