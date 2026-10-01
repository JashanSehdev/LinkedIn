import { Type } from "class-transformer"
import { IsNotEmpty, IsNumber, IsString, ValidateNested } from "class-validator"

class JobDescription {

    @IsString()
    @IsNotEmpty()
    position : string

    @IsNumber()
    salary : number

    @IsString()
    experience : string
}


export class CreateJobDto {

    @IsNumber()
    @IsNotEmpty()
    companyId : number

    @ValidateNested()
    @IsNotEmpty()
    
    @Type(() => JobDescription)
    job_description : JobDescription
}

