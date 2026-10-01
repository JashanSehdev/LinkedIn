import { IsNotEmpty, IsString } from "class-validator";

export class CreateCompanyDto {
    @IsString()
    @IsNotEmpty()
    company_name : string

    @IsString()
    @IsNotEmpty()
    category : string

    @IsString()
    @IsNotEmpty()
    company_logo : string

    @IsString()
    @IsNotEmpty()
    location : string
}
