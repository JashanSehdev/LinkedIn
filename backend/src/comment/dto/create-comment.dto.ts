import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import {  } from "typeorm";

export class CreateCommentDto {

    @IsString()
    @IsNotEmpty()
    text: string

    @IsNumber()
    @IsNotEmpty()
    postId : number 

}
