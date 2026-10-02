import { IsEmpty, IsNotEmpty, IsString } from "class-validator";



export class QueryDto {
    @IsString()
    @IsNotEmpty()
    type : string
}