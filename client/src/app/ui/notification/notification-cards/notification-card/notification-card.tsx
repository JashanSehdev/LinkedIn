import { Avatar, Box, Button, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import styles from "./notification.module.css";
import { Notification } from "@/types/notification.type";
import { formatDistanceToNow } from "date-fns";
import { useAppDispatch } from "@/features/store";
import { acceptConnectionAsync } from "@/features/connection/handle-connections/connection.action";
const profileImage =
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function NotificationCard({ data }: { data: Notification }) {
  const date = formatDistanceToNow(new Date(data.createdAt), {
    addSuffix: true,
  }).substring(5);

  const dispatch = useAppDispatch();

  const handleAccept = () => {
    try {
      if (!data.referenceId) return;
      dispatch(acceptConnectionAsync(data.referenceId));
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  console.log(date);
  return (
    <Box
      className={data.isRead ? styles.container : styles.container_not_viewed}
    >
      <Box className={styles.section1}>
        <Avatar src={profileImage} className={styles.avatar} />
        <Box>
          <Typography variant="body2">
            {`${data?.sender} wants to connect with you`}
          </Typography>
          <Button
            className={styles.connectButton}
            variant="outlined"
            size="small"
            onClick={handleAccept}
          >
            Connect
          </Button>
        </Box>
      </Box>

      <Box className={styles.section2}>
        <Typography variant="caption">{date}</Typography>
        <MoreHorizIcon />
      </Box>
    </Box>
  );
}
