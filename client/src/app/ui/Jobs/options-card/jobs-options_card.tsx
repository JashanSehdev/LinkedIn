import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import GroupsIcon from "@mui/icons-material/Groups";
import styles from "./jobs-options-card.module.css";


const icons = [
  '<svg xmlns="http://www.w3.org/2000/svg" id="text-bulleted-list-medium" fill="currentColor" aria-hidden="true" data-rtl="true" data-supported-dps="24x24" viewBox="0 0 24 24" data-token-id="407" width="24" height="24" class="c26322bb _57df2c34 _1eacdacc _471996f5" style="width: 24px; min-width: 24px; height: 24px; min-height: 24px;"><path d="M7 4a2 2 0 1 1-2-2 2 2 0 0 1 2 2m2-1v2h12V3zm-4 7a2 2 0 1 0 2 2 2 2 0 0 0-2-2m4 3h12v-2H9zm-4 5a2 2 0 1 0 2 2 2 2 0 0 0-2-2m4 3h12v-2H9z"></path></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" id="bookmark-fill-medium" fill="currentColor" aria-hidden="true" data-supported-dps="24x24" viewBox="0 0 24 24" data-token-id="148" width="24" height="24" class="c26322bb _57df2c34 _1eacdacc _471996f5" style="width: 24px; min-width: 24px; height: 24px; min-height: 24px;"><path d="M19 5a3 3 0 0 0-3-3H5v20l7-6.29L19 22z"></path></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" id="premium-chip-v2-medium" aria-hidden="true" data-supported-dps="24x24" viewBox="0 0 24 24" data-token-id="673" width="24" height="24" class="c26322bb _57df2c34 _1eacdacc _471996f5" style="width: 24px; min-width: 24px; height: 24px; min-height: 24px;"><path fill="#e7a33e" d="M20.01 20.01c.63-.63.99-1.48.99-2.38V6.38C21 4.51 19.49 3 17.62 3H6.38c-.9 0-1.75.36-2.38.99l16.02 16.02z"></path><path fill="#c37d16" d="M3.99 3.99C3.36 4.62 3 5.48 3 6.38v11.25c0 1.87 1.51 3.38 3.38 3.38h11.25c.9 0 1.75-.36 2.38-.99z"></path></svg>'
 ]

function StringIcon({ htmlString }: {htmlString : string}) {
  return <div style={{ display: 'flex' }} dangerouslySetInnerHTML={{ __html: htmlString }} />;
}

export default function JobsOptionsCard() {
  return (
    <Paper className={styles.container}>
      <List>
        {["Preferences", "Job tracker", "My Career Insights"].map((text, index) => (
          <ListItem key={text}  className={styles.listItem}>
            <ListItemButton>
              <ListItemIcon><StringIcon htmlString={icons[index]} /></ListItemIcon>
              {/* <ListItemText primary={text} /> */}
              <Typography className={styles.listText}>{text}</Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box className={styles.footer}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="compose-medium"
                fill="currentColor"
                aria-hidden="true"
                data-supported-dps="24x24"
                viewBox="0 0 24 24"
                data-token-id="96"
                width="24"
                height="24"
                style={{
                  width: "24px",
                  minWidth: "24px",
                  height: "24px",
                  minHeight: "24px",
                  color: '#0a66c2'
                }}
              >
                <path d="M19 12h2v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h6v2H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zm4-8a2.9 2.9 0 0 1-.87 2l-8.94 9L7 17l2-6.14 9-9A3 3 0 0 1 23 4m-4 2.35L17.64 5l-7.22 7.22 1.35 1.34z"></path>
              </svg>
            </ListItemIcon>
            <ListItemText primary={"Post a free Job"} />
          </ListItemButton>
        </ListItem>
      </Box>
    </Paper>
  );
}
