
import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDto {

    // @IsString()
    // @IsNotEmpty({message : 'username is empty'})
    // username: string


    @IsString()
    @IsNotEmpty({message :'email is empty'})
    email: string

    @IsString()
    @IsNotEmpty()
    @MinLength(6, {message: 'Password must be greater than 6 words'})
    password: string
}

