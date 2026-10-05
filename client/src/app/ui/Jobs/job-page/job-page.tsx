'use client'
import { fetchJobByIdAsync } from "@/features/job/handle-job/job.action";
import { useAppDispatch } from "@/features/store";
import type { Job } from "@/types/job";
import { Box, Button, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import styles from  './job-page.module.css'

export default function JobPage({jobId} : {readonly jobId : number}) {
    const dispatch = useAppDispatch()

    const [job, setJob] = useState<Job | undefined>()
    useEffect(() => {
        const fetchJob = async() => {
            const result = await dispatch(fetchJobByIdAsync(jobId)).unwrap();
            setJob(result)
        }

        fetchJob()
    },[dispatch])
    return(
        <Box>
            <Paper className={styles.container}>
                <Box>
                    <Box component={'img'} alt = 'component image' src={job?.company.company_logo} className={styles.company_logo} />
                    <Typography variant="h3">{job?.job_description?.position}</Typography>
                    <Box>
                        <Typography>{job?.company.location}</Typography>
                        <Typography>Experience: {job?.job_description.experience}</Typography>
                    </Box>
                    <Button className={styles.button} variant="outlined">{job?.job_description.salary}</Button>
                </Box>
                <Box>
                    <Button variant="contained" className={styles.button}>
                        Apply
                    </Button>
                    <Button variant="outlined" className={styles.button}>
                        save
                    </Button>
                </Box>
            </Paper>

        </Box>
    )
}