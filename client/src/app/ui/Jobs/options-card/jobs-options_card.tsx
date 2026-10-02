import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Paper,
  Typography,
} from "@mui/material";
import styles from "./jobs-options-card.module.css";
import CreteJobModal from "../create-company-modal/create-company-modal";
import CreateCompanyModal from "../create-company-modal/create-company-modal";
import CreateJobModal from "../post-job/post-job";
import PostJobModal from "../post-job/post-job";

const icons = [
  '<svg xmlns="http://www.w3.org/2000/svg" id="text-bulleted-list-medium" fill="currentColor" aria-hidden="true" data-rtl="true" data-supported-dps="24x24" viewBox="0 0 24 24" data-token-id="407" width="24" height="24" class="c26322bb _57df2c34 _1eacdacc _471996f5" style="width: 24px; min-width: 24px; height: 24px; min-height: 24px;"><path d="M7 4a2 2 0 1 1-2-2 2 2 0 0 1 2 2m2-1v2h12V3zm-4 7a2 2 0 1 0 2 2 2 2 0 0 0-2-2m4 3h12v-2H9zm-4 5a2 2 0 1 0 2 2 2 2 0 0 0-2-2m4 3h12v-2H9z"></path></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" id="bookmark-fill-medium" fill="currentColor" aria-hidden="true" data-supported-dps="24x24" viewBox="0 0 24 24" data-token-id="148" width="24" height="24" class="c26322bb _57df2c34 _1eacdacc _471996f5" style="width: 24px; min-width: 24px; height: 24px; min-height: 24px;"><path d="M19 5a3 3 0 0 0-3-3H5v20l7-6.29L19 22z"></path></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" id="premium-chip-v2-medium" aria-hidden="true" data-supported-dps="24x24" viewBox="0 0 24 24" data-token-id="673" width="24" height="24" class="c26322bb _57df2c34 _1eacdacc _471996f5" style="width: 24px; min-width: 24px; height: 24px; min-height: 24px;"><path fill="#e7a33e" d="M20.01 20.01c.63-.63.99-1.48.99-2.38V6.38C21 4.51 19.49 3 17.62 3H6.38c-.9 0-1.75.36-2.38.99l16.02 16.02z"></path><path fill="#c37d16" d="M3.99 3.99C3.36 4.62 3 5.48 3 6.38v11.25c0 1.87 1.51 3.38 3.38 3.38h11.25c.9 0 1.75-.36 2.38-.99z"></path></svg>',
];

function StringIcon({ htmlString }: { htmlString: string }) {
  return <div style={{ display: "flex" }} dangerouslySetInnerHTML={{ __html: htmlString }} />;
}

export default function JobsOptionsCard() {
  return (
    <Paper className={styles.container}>
      <List>
        {["Preferences", "Job tracker", "My Career Insights"].map((text, index) => (
          <ListItem key={text} className={styles.listItem}>
            <ListItemButton>
              <ListItemIcon>
                <StringIcon htmlString={icons[index]} />
              </ListItemIcon>
              {/* <ListItemText primary={text} /> */}
              <Typography className={styles.listText}>{text}</Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box className={styles.footer}>

        <PostJobModal/>
      </Box>
    </Paper>
  );
}
