import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';


export class FileDto {
  @IsString()
  file_name: string;

  @IsString()
  file_url: string;

  @IsString()
  file_type: string;

  @IsNumber()
  file_size: number;
}

export class CreateMessageDto {
  @IsNumber()
  @IsNotEmpty()
  chat_id: number;

  @IsString()
  @IsNotEmpty()
  text: string;

  @IsOptional()
  @ValidateNested({each : true})
  @Type(() => FileDto)
  files?: FileDto[];
}


