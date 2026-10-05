import JobPage from "@/app/ui/Jobs/job-page/job-page";
import { Job } from "@/types/job";
import { Box, Button, Paper, Typography } from "@mui/material";

type Prop = {
    job : Job
    params : Promise<{id : string}>
}
export default async function JobDetails ({params, job} : Prop) {
    const {id} = await params
    return(
        <JobPage jobId={Number(id)}/>
    )
}