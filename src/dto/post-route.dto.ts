import { IsEmail, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class PostRouteDto {
  @IsInt()
  @IsNotEmpty()
  id: number;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
