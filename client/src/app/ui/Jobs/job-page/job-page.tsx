"use client";
import { applyJobAsync, fetchJobByIdAsync } from "@/features/job/handle-job/job.action";
import { useAppDispatch } from "@/features/store";
import type { Job } from "@/types/job";
import { Box, Button, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import styles from "./job-page.module.css";

export default function JobPage({ jobId }: { readonly jobId: number }) {
  const dispatch = useAppDispatch();

  const [job, setJob] = useState<Job | undefined>();
  console.log(job)
  useEffect(() => {
    const fetchJob = async () => {
      const result = await dispatch(fetchJobByIdAsync(jobId)).unwrap();
      setJob(result);
    };

    fetchJob();
  }, [dispatch]);

  const handleApplyJob = async () => {
    if (!job) return;
    try {
      const result = await dispatch(applyJobAsync(job.id)).unwrap();
      setJob((prev) => {
        if (!prev) return prev;
        else return ({ ...prev, isApplied: result.id });
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  return (
    <Box>
      <Paper className={styles.container}>
        <Box>
          <Box
            component={"img"}
            alt="component image"
            src={job?.company?.company_logo}
            className={styles.company_logo}
          />
          <Typography variant="h3">{job?.job_description?.position}</Typography>
          <Box>
            <Typography>{job?.company?.location}</Typography>
            <Typography>Experience: {job?.job_description?.experience}</Typography>
          </Box>
          <Button className={styles.button} variant="outlined">
            {job?.job_description.salary}
          </Button>
        </Box>
        <Box className={styles.buttons}>
          {job?.isApplied ? (
            <Button variant="contained" className={styles.button}>
              Applied
            </Button>
          ) : (
            <Button variant="contained" className={styles.button} onClick={handleApplyJob}>
              Apply
            </Button>
            
          )}
          <Button variant="outlined" className={styles.button}>
            save
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
