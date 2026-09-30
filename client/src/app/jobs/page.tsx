import { Box } from "@mui/material";
import styles from "./jobs.module.css";
import JobsProfileCard from "../ui/Jobs/profile-card/jobs-profile-card";
import JobsOptionsCard from "../ui/Jobs/options-card/jobs-options_card";
import JobPostCard from "../ui/Jobs/right-section/job-post/job-post";
import JobMatch from "../ui/Jobs/right-section/job-match/job-match";

export default function Jobs() {
  return (
    <Box className={styles.container}>
      <Box className={styles.sub_container}>
        <Box className={styles.left_section}>
          <JobsProfileCard />
          <JobsOptionsCard />
        </Box>
        <Box className={styles.right_section}>
          <JobPostCard />
          <JobMatch/>
        </Box>
      </Box>
    </Box>
  );
}
