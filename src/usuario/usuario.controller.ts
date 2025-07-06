import { Body, Controller, Get, Param, Post, ParseIntPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { usuarioService } from "./usuario.service";

@Controller('users')
export class usuarioController {
    constructor(private userService: usuarioService) {}

  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.userService.create(dto);
  }

  @Get(':id/messages')
  findMessages(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findMessages(id);
  } 
}