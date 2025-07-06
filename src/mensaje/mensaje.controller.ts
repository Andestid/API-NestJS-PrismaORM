import { Body, Controller, Post } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { mensajeService } from './mensaje.service';

@Controller('messages')
export class mensajeController {
  constructor(private mensajeService: mensajeService) {}

  @Post()
  create(@Body() dto: CreateMessageDto) {
    return this.mensajeService.create(dto);
  }
}