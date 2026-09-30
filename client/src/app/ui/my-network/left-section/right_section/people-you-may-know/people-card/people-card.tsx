import { User } from "@/types/feed";
import { Avatar, Box, Button, Paper, Typography } from "@mui/material";
import styles from "./people-card.module.css";
import CloseIcon from '@mui/icons-material/Close';

type Prop = {
  user: User;
};
const bannerImage =
  "https://imgs.search.brave.com/HE8OYPoKL3Xql0VAXTIE-ZOLRRYAO9XG8-qqhyXkrfA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzEv/MzMwLzMxMy9zbWFs/bC9kZXNlcnQtaG9y/aXpvbi11bmRlci1j/bGVhci1ibHVlLXNr/eS1uYXR1cmUtdHJh/dmVsLWJhY2tncm91/bmQtcGhvdG8uanBn";

export default function PeopleCard({ user }: Prop) {
  return (
    <Paper className={styles.container}>
      <Box component={"img"} src={bannerImage} className={styles.banner} alt="banner" />
      <Avatar className={styles.avatar} src={user.profileImage} />
      <span className ={styles.close}><CloseIcon fontSize="small" sx={{color:'white'}}/></span>

      <Box className={styles.bio}>
        <Typography variant="subtitle1" className={styles.name}>
          {user.name}
        </Typography>
        <Typography variant="caption" align="center" className={styles.headline}>
          {user.headline}
        </Typography>
      </Box>
      <Button className={styles.button}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="connect-small"
          fill="currentColor"
          aria-hidden="true"
          data-supported-dps="16x16"
          viewBox="0 0 16 16"
          data-token-id="414"
          width="16"
          height="16"
        >
          <path d="M9 4a3 3 0 1 1-3-3 3 3 0 0 1 3 3M6.75 8h-1.5A2.25 2.25 0 0 0 3 10.25V15h6v-4.75A2.25 2.25 0 0 0 6.75 8M13 8V6h-1v2h-2v1h2v2h1V9h2V8z"></path>
        </svg>
        Connect
      </Button>
    </Paper>
  );
}
