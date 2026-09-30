import { Box, Divider, ListItemButton, ListItemIcon, Paper, Typography } from "@mui/material";
import styles from "./job-match.module.css";
import JobMatchCard from "./job-match-card/job-match-card";
import JobPost from "../job-post/job-card/job-card";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { jobs2 } from "@/data/jobs";

export default function JobMatch() {
  return (
    <Paper className={styles.container}>
      <Box className={styles.header}>
        <Box>
          <Typography variant="h6" className={styles.title}>
            Job that Match your profile
          </Typography>
          <Typography variant="body2" align="left">
            Based on your profile and Job criteria
          </Typography>
        </Box>
      </Box>
      <Box>
        {jobs2.slice(0,3).map((item) => (
          <Box key={item.id}>
            <JobMatchCard job={item} />
            <Divider />
          </Box>
        ))}

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
