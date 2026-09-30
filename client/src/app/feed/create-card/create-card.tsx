import { Avatar, Box, Paper } from "@mui/material";
import styles from "./create-card.module.css";

const profilePic =
  "https://i.pinimg.com/736x/ce/ad/94/cead941fca1ea8075e01f564f1eedf98.jpg";

export default function CreatePost() {
  return (
    <Paper className={styles.container}>
      <Box className={styles.section1}>
        <Avatar
          src={profilePic}
          height={13}
          width={13}
          className={styles.avatar}
        />
        <input placeholder="Start a post" />
      </Box>

      <Box className={styles.section2}>
        <Box className={styles.button}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="video-medium"
            fill="#44712e"
            aria-hidden="true"
            data-supported-dps="24x24"
            viewBox="0 0 24 24"
            data-token-id="788"
            width="24"
            height="24"
          >
            <path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m-9 12V8l6 4z"></path>
          </svg>
          <p>Video</p>
        </Box>
        <Box className={styles.button}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="image-medium"
            fill="#0a66c2"
            aria-hidden="true"
            data-supported-dps="24x24"
            viewBox="0 0 24 24"
            data-token-id="213"
            width="24"
            height="24"
          >
            <path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m1 13a1 1 0 0 1-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm-2-7a2 2 0 1 1-2-2 2 2 0 0 1 2 2"></path>
          </svg>
          <p>Photo</p>
        </Box>
        <Box className={styles.button}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="content-align-left-medium"
            fill="#b24020"
            aria-hidden="true"
            data-supported-dps="24x24"
            viewBox="0 0 24 24"
            data-token-id="117"
            width="24"
            height="24"
          >
            <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
          </svg>
          <p>View article</p>
        </Box>
      </Box>
    </Paper>
  );
}
