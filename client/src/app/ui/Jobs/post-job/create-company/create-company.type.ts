import z from "zod"


export const companySchema = z.object({
    company_name : z.string().min(1, "Company name required"),
    category : z.string().min(1, "company category required"),
    location : z.string().min(1, "company location required"),
    company_logo : z.url()
}) 


export type CreateCompanyType = z.infer<typeof companySchema>