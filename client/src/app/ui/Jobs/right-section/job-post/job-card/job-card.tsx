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
        <Box component={'img'} height={50} width={50} src={job?.logo ?? 'string'} alt="logo" />
        <Box>
          <Typography className={styles.title}>{job?.title}</Typography>
          <Typography variant="body2" component={'span'}>{job?.company}</Typography> | <Typography variant="body2" component={'span'}>{job?.location}</Typography>
          <Typography variant="caption">{job?.posted}</Typography>
        </Box>
      </Box>

      <IconButton className={styles.logo}>
        <CloseIcon />
      </IconButton>
    </Box>
  );
}
