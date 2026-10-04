import { Box, Divider, Paper } from "@mui/material";
import styles from "./notification-cards.module.css";
import NotificationCard from "./notification-card/notification-card";
import { notifications } from "@/data/notification";
import { useAppDispatch, useAppSelector } from "@/features/store";
import { useEffect } from "react";
import { fetchNotificationAsync } from "@/features/notification/handle-notification/notification.action";

export default function NotificationCards({ category }: { category: string }) {
  const notifications = useAppSelector(
    (state) => state.notification.notifications,
  );
  const dispatch = useAppDispatch();
  console.log("notifications", notifications);
  useEffect(() => {
    dispatch(fetchNotificationAsync());
  }, []);
  
  // const filteredNotification = notifications.filter((item) => {
  //   if (category === "jobs" || category === "mentions") {
  //     return item.type === 'Connect';
  //   } else if (category === "my posts") {
  //     return item.category === "my-posts";
  //   } else {
  //     return true;
  //   }
  // });
  return (
    <Paper className={styles.container}>
      {notifications.map((item) => (
        <Box key={item.id}>
          <NotificationCard data={item} />
          <Divider />
        </Box>
      ))}
    </Paper>
  );
}
