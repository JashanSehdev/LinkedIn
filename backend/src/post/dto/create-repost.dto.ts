import { IsOptional, IsString } from "class-validator";

export class CreateRepostDto {

    @IsOptional()
    @IsString()
    content ?: string
}