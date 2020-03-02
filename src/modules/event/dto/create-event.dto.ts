import { ApiProperty  } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsDateString, IsString } from 'class-validator';

export class CreateEventDto {
  constructor(dto: Partial<CreateEventDto>) {
    Object.assign(this, dto);
  }

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly firstName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly lastName: string;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  readonly eventDate: Date;
}