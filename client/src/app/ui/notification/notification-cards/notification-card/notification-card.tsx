import { Avatar, Box, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import styles from "./notification.module.css";
import { Notification } from "@/data/notification";

const profileImage = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

export default function NotificationCard({data} : {data: Notification}) {
  return (
    <Box className={ data.read ? styles.container : styles.container_not_viewed}>
      <Box className={styles.section1}>
        <Avatar src={data?.user?.profileImage} className={styles.avatar}/>
        <Box>
          <Typography variant="body2">
            {data?.message}
          </Typography>
        </Box>
      </Box>

      <Box className={styles.section2}>
        <Typography variant="caption">{data?.time}</Typography>
        <MoreHorizIcon />
      </Box>
    </Box>
  );
}
