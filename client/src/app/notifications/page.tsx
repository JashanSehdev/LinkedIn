'use client'
import { Box } from "@mui/material";
import styles from './notification.module.css';
import ProfileCard from "../ui/feed/left-section/profile-card/profile-card";
import NotificationCards from "../ui/notification/notification-cards/notification-cards";
import ControlCard from "../ui/notification/control-card/control-card";
import ManageNotification from "../ui/notification/manage-notification-card/manage-notification-card";
import { useState } from "react";

export default function Notification() {
  const [category, setCategory] = useState('all')
  return (
    <Box className={styles.container}>
      <Box className={styles.sub_container}>
        <Box className={styles.left_section}>
          <ProfileCard />
          <ManageNotification/>

        </Box>
        <Box className={styles.mid_section}>
          <ControlCard category={category} setCategory={setCategory}/>
          <NotificationCards category={category}/>
        </Box>
        <Box className={styles.right_section}>

        </Box>
      </Box>
    </Box>
  );
}
