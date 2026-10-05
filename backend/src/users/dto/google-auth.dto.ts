import { IsNotEmpty, IsString } from "class-validator";

export class GoogleAuthDto {

    @IsString()
    @IsNotEmpty()
    username : string

    @IsString()
    @IsNotEmpty()
    email : string
}