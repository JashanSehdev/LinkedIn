export type Job = {
    id: number,
    title: string,
    company: string,
    location: string,
    posted: string,
    logo: string
  }

  export type Company = {
    id : number,
    company_name : string,
    location: string,
    company_logo: string
  }

  export type JobType = {
    id :number,
    company_id : number,
    job_description : Job_description
  }

  export type Job_description = {
    position:string,
    salary : number,
    experience : string
  }