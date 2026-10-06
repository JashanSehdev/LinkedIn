import {
  Box,
  CircularProgress,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Paper,
  Typography,
} from "@mui/material";
import styles from "./job-post.module.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useAppDispatch, useAppSelector } from "@/features/store";
import { useEffect, useState } from "react";
import { fetchJobs } from "@/features/job/handle-job/job.action";
import { Job } from "@/types/job";
import JobPost from "./job-card/job-card";
import { useRouter } from "next/navigation";

export default function JobPostCard( ) {
  const jobs = useAppSelector((state) => state.jobs.jobs);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(true)
  const route = useRouter()
  useEffect(()=>{ 
    try {
      dispatch(fetchJobs())

    } catch (error) {
      console.error('error occur while fetching jobs');
      throw error
    } finally{
      setLoading(false)
    }
  },[dispatch])



  return (
    <Paper className={styles.container}>
      <Box className={styles.header}>
        <Box>
          <Typography variant="h6" className={styles.title}>Jobs based on your Preferences</Typography>
          <Typography variant="body2" align="left">
            Software Engineer or Full Stack Engineer or Product Manager, on-site or hybrid or remote
            in Amritsar/Ludhiana Area or Bengaluru or Pune District or Gurugram
          </Typography>
        </Box>
        <Box className={styles.write_icon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="edit-medium"
            fill="currentColor"
            aria-hidden="true"
            data-supported-dps="24x24"
            viewBox="0 0 24 24"
            data-token-id="74"
            width="24"
            height="24"
          >
            <path d="M21.13 2.86a3 3 0 0 0-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 0 0 0-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
          </svg>
        </Box>
      </Box>
      <Box>
        {loading ? <CircularProgress/> : 
         jobs?.map((item) => <JobPost key={item.id} job={item} />)
          
        }
      </Box>

      <ListItemButton alignItems="center" className={styles.showAll}>
        <Typography>Show All</Typography>
        <ListItemIcon>
          <ArrowRightAltIcon />
        </ListItemIcon>
      </ListItemButton>
    </Paper>
  );
}
