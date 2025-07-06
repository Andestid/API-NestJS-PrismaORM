import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateMessageDto {
  @IsNotEmpty()
  content: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}