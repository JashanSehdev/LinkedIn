import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper } from "@mui/material";
import PeopleIcon from '@mui/icons-material/People';
import GroupsIcon from '@mui/icons-material/Groups';
import styles from './options.module.css'

const svgs= [
  '<svg xmlns="http://www.w3.org/2000/svg" id="people-medium" fill="currentColor" data-supported-dps="24x24" viewBox="0 0 24 24" width="24" height="24"><path d="M12 16v6H3v-6a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3m5.5-3A3.5 3.5 0 1 0 14 9.5a3.5 3.5 0 0 0 3.5 3.5m1 2h-2a2.5 2.5 0 0 0-2.5 2.5V22h7v-4.5a2.5 2.5 0 0 0-2.5-2.5M7.5 2A4.5 4.5 0 1 0 12 6.5 4.49 4.49 0 0 0 7.5 2"></path></svg>',
  `<svg xmlns="http://www.w3.org/2000/svg" id="person-medium" fill="currentColor" aria-hidden="true" data-supported-dps="24x24" viewBox="0 0 24 24" data-token-id="185" width="24" height="24" class="c26322bb _57df2c34 _1eacdacc _471996f5" style="width: 24px; min-width: 24px; height: 24px; min-height: 24px;"><path d="M7 7a5 5 0 1 1 5 5 5 5 0 0 1-5-5m7 7h-4a3 3 0 0 0-3 3v5h10v-5a3 3 0 0 0-3-3"></path></svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" id="group-medium" fill="currentColor" aria-hidden="true" data-supported-dps="24x24" viewBox="0 0 24 24" data-token-id="333" width="24" height="24" class="c26322bb _57df2c34 _1eacdacc _471996f5" style="width: 24px; min-width: 24px; height: 24px; min-height: 24px;"><path d="M15 13.25V21H9v-7.75A2.25 2.25 0 0 1 11.25 11h1.5A2.25 2.25 0 0 1 15 13.25m5-.25h-1a2 2 0 0 0-2 2v6h5v-6a2 2 0 0 0-2-2M12 3a3 3 0 1 0 3 3 3 3 0 0 0-3-3m7.5 8A2.5 2.5 0 1 0 17 8.5a2.5 2.5 0 0 0 2.5 2.5M5 13H4a2 2 0 0 0-2 2v6h5v-6a2 2 0 0 0-2-2m-.5-7A2.5 2.5 0 1 0 7 8.5 2.5 2.5 0 0 0 4.5 6"></path></svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" id="calendar-medium" fill="currentColor" aria-hidden="true" data-supported-dps="24x24" viewBox="0 0 24 24" data-token-id="220" width="24" height="24" class="c26322bb _57df2c34 _1eacdacc _471996f5" style="width: 24px; min-width: 24px; height: 24px; min-height: 24px;"><path d="M3 3v15c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V3zm13 1.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5m-8 0a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M19 18c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V9h14zM7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"></path></svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" id="company-medium" fill="currentColor" aria-hidden="true" data-supported-dps="24x24" viewBox="0 0 24 24" data-token-id="249" width="24" height="24" class="c26322bb _57df2c34 _1eacdacc _471996f5" style="width: 24px; min-width: 24px; height: 24px; min-height: 24px;"><path d="M4 2v20h16V2zm14 18h-4v-2h-4v2H6V4h12zm-7-8H8v-2h3zm0 4H8v-2h3zm5-4h-3v-2h3zm-5-4H8V6h3zm5 0h-3V6h3zm0 8h-3v-2h3z"></path></svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" id="newspaper-medium" fill="currentColor" aria-hidden="true" data-supported-dps="24x24" viewBox="0 0 24 24" data-token-id="139" width="24" height="24" class="c26322bb _57df2c34 _1eacdacc _471996f5" style="width: 24px; min-width: 24px; height: 24px; min-height: 24px;"><path d="M13 13h5v1h-5zm5-5H6v3h12zm-5 8h5v-1h-5zm9-12v13a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V4zm-2 2H4v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1zm-9 7H6v3h5z"></path></svg>`
]
function StringIcon({ htmlString }: {htmlString : string}) {
  return <div style={{ display: 'flex' }} dangerouslySetInnerHTML={{ __html: htmlString }} />;
}

export default function OptionsCard() {
    return(
        <Paper className={styles.container}>
            <Box className={styles.header}>
                <p>Manage my network</p>
            </Box>
            <Divider/>
            <List>
        {['Connections', 'Following & Followers', 'Groups', 'Events', 'Pages', 'Newsletter'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {<StringIcon htmlString={svgs[index]} />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
        </Paper>
    )
}