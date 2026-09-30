import {
  Box,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Paper,
  Typography,
} from "@mui/material";
import styles from "./job-post.module.css";
import JobPost from "./job-card/job-card";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { jobs1 } from "@/data/jobs";

export default function JobPostCard() {
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
        {
          jobs1.slice(0, 3).map((item) => (
            <Box key={item.id}>
              <JobPost job={item}/>
              <Divider/>
            </Box>
            
          ))
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
