import { Box, Paper } from "@mui/material";
import styles from "./top-nav.module.css";

export default function TopNav() {
  return (
    <Paper className={styles.container}>
      <Box className = {styles.buttons}>
        <button>Grow</button>
        <button>Catch up</button>
      </Box>
    </Paper>
  );
}
