import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { ConnectionStatus } from '../entities/connection.entity.js';

export class CreateConnectionDto {
  @IsNumber()
  @IsNotEmpty()
  receiverId: number;

  @IsOptional()
  @IsEnum(ConnectionStatus)
  status?: ConnectionStatus;
}
