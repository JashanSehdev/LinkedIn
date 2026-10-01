import { IsNumber, IsString } from "class-validator";

export class CreateAppliedJobDto {
    @IsNumber()
    jobId : number
    
}
