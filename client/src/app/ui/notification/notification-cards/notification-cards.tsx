import { Box, Divider, Paper } from "@mui/material";
import styles from "./notification-cards.module.css";
import NotificationCard from "./notification-card/notification-card";
import { notifications } from "@/data/notification";

export default function NotificationCards({ category }: { category: string }) {
  const filteredNotification = notifications.filter((item) => {
    if (category === "jobs" || category === "mentions") {
      return item.category === category;
    } else if(category=== 'my posts'){
      return item.category === 'my-posts'
    } 
    else {
      return true;
    }
  });
  return <Paper className={styles.container}>
    {
      filteredNotification.map((item) => (
        <Box key={item.id}>
          <NotificationCard data={item}/>
          <Divider/>
        </Box>
      ))
    }
  </Paper>;
}
