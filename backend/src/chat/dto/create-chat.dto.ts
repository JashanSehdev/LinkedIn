import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateChatDto {

    @IsNumber()
    @IsNotEmpty()
    recipient_id : number
}
