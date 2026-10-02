'use client'
import { Avatar, Button, Paper, Typography } from "@mui/material";
import { Box, Container } from "@mui/material";
import styles from "./profile-page.module.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SendIcon from "@mui/icons-material/Send";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/features/store";
import { fetchUserProfile } from "@/features/auth/handle-auth/auth.action";
import { useParams } from "next/navigation";
import { User } from "@/types/feed";

const bannerImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB1_fCjUUdNS8MTH-VRbE0NULU2-zcuoi_shpkxGr_A236WAtbfXCvxcQ&s=10";

type Prop = {
  params: Promise<{ id: number }>;
};
export default function ProfilePage() {
  const params = useParams<{ id: string }>();
  const {id} = params;
  const dispatch = useAppDispatch();
  console.log(id);
  
  const [user, setUser] = useState<User | null>(null);

useEffect(() => {
  const loadProfile = async () => {
    try {
      const result = await dispatch(fetchUserProfile(Number.parseInt(id))).unwrap();
      setUser(result);
    } catch (error) {
      console.error(error);
    }
  };

  if (id) {
    loadProfile();
  }
  
}, [dispatch, id]);

 console.log(user)
  return (
    <Container className={styles.main}>
      <Paper className={styles.container}>
        <Box component={"img"} className={styles.banner} src={bannerImage} />
        <Avatar
          className={styles.avatar}
          src="https://imgs.search.brave.com/KAeUwn0klTG-hicDSFfDVR-fZP1uK732DaeVHjQ5CCQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90ZW1w/bGF0ZS5jYW52YS5j/b20vRUFISjZpWUhm/ancvMS8wLzE2MDB3/LWs5Mm85ZmVIYVdv/LmpwZw"
        />

        <Box className={styles.content}>
          <Box className={styles.section1}></Box>
          <Box className={styles.section2}>
            <Box className={styles.section3}>
              <Typography variant="h5" className={styles.username}>
                {user?.username ?? 'username'}
              </Typography>
              <Typography variant="body2">
                SVP LinkedIn Ads and Microsoft Advertising
              </Typography>
              <Typography variant="caption">New York, United States</Typography>
              <br />
              <Typography variant="caption">
                58,290 followers · 500+ connections
              </Typography>
              <Box className={styles.buttons}>
                <Button className={styles.button} variant="contained">
                  Follow
                </Button>

                <Button className={styles.button} variant="outlined">
                  <SendIcon /> Message
                </Button>
                <Button variant="outlined" className={styles.button}>
                  <MoreHorizIcon />
                </Button>
              </Box>
            </Box>
            <Box className={styles.section4}></Box>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}
