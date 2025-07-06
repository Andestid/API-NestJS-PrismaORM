import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class usuarioService {
    constructor(private prisma: PrismaService) {}

    create(data: CreateUserDto) {
        return this.prisma.user.create({ data });
    }

    findMessages(userId: number) {
        return this.prisma.message.findMany({
        where: { userId },
        });
    }

    findByEmail(email: string) {
        return this.prisma.user.findUnique({ where: { email } });
    }
}