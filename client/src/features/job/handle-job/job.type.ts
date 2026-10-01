

export type CreateJob = {
    companyId :number,
    
    job_description : Job_Description
}

type  Job_Description = {
    position: string,
    salary : number,
    experience : string
}