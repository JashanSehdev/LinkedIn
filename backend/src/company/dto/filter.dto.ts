import { IsBoolean, IsOptional, IsString } from "class-validator";

export class FilterDto {
    @IsOptional()
    @IsString()
    created_by_user : string
}