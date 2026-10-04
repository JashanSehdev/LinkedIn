import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { NotificationType } from "../entities/notification.entity.js";

export class CreateNotificationDto {
    
    @IsNumber()
    @IsNotEmpty()
    recipientId : number

    @IsEnum(NotificationType)
    type : NotificationType

    @IsNumber()
    @IsNotEmpty()
    referenceId : number
}
