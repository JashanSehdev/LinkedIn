import { Box, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import logo from "@/../public/flipKart.png";
import styles from "./job-card.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { Job } from "@/types/job";

export default function JobPost({job} : {job:Job}) {
  return (
    <Box className={styles.container}>
      <Box className={styles.section1}>
        <Box component={'img'} sx={{objectFit: 'cover'}} height={50} width={50} src={job?.company.company_logo ?? 'string'} alt="logo" />
        <Box>
          <Typography className={styles.title}>{job?.job_description.position}</Typography>
          <Typography variant="body2" component={'span'}>{job?.company.company_name}</Typography> | <Typography variant="body2" component={'span'}>{job?.location}</Typography>
          <Typography variant="caption">{job.company.location}</Typography>
        </Box>
      </Box>

      <IconButton className={styles.logo}>
        <CloseIcon />
      </IconButton>
    </Box>
  );
}
