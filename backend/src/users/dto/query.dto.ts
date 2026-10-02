import { IsOptional, IsString } from "class-validator";

export class QueryDto {
    @IsString()
    username :string
}