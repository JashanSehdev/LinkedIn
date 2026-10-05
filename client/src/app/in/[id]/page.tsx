'use client'
import { Avatar, Button, Paper, Typography } from "@mui/material";
import { Box, Container } from "@mui/material";
import styles from "./profile-page.module.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SendIcon from "@mui/icons-material/Send";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/features/store";
import { fetchUserProfile } from "@/features/auth/handle-auth/auth.action";
import { useParams } from "next/navigation";
import { User } from "@/types/feed";
import { toggleFollow } from "@/features/follow/handle-follow/follow.action";

const bannerImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB1_fCjUUdNS8MTH-VRbE0NULU2-zcuoi_shpkxGr_A236WAtbfXCvxcQ&s=10";

export default function ProfilePage() {
  const [followLoading, setFollowLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const params = useParams<{ id: string }>();
  const currentUser = useAppSelector((state) => state.auth.user)
  const followings = useAppSelector((state) => state.follow.Followings)
  const {id} = params;
  const dispatch = useAppDispatch();
  const doesFollow =  followings?.some((item) => item.followedId === user?.id)


  
  const handleFollow = async() => {
      setFollowLoading(true)
      if(!user) {
        console.error('user not found')
        return
      }
      await dispatch(toggleFollow(user?.id))
      setFollowLoading(false)
    }

    console.log("fethed User profile",user)

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
               {user?.followerCount ?? 0} followers · {user?.connections ?? 0} connections
              </Typography>
              <Box className={styles.buttons}>
                { currentUser?.id !== user?.id && (
                  doesFollow ? <Button className={styles.button} variant="outlined" onClick={handleFollow}>
                  Following
                </Button> : <Button className={styles.button} variant="contained" onClick={handleFollow}>
                  Follow
                </Button>
                )

                }
                

                <Button className={styles.button} variant="outlined">
                   connect
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
