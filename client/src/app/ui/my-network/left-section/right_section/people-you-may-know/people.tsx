import { Box, Paper, Typography } from "@mui/material";
import styles from "./people.module.css";
import { feedData } from "@/data/feed";
import PeopleCard from "./people-card/people-card";

export default function People() {
  return (
    <Paper className={styles.container}>
      <Typography>People you may know from Chitkara University</Typography>
      <Box className={styles.cards}>
        {feedData.map((item) => (
          <PeopleCard key={item.author.id} user={item.author} />
        ))}
      </Box>
    </Paper>
  );
}
