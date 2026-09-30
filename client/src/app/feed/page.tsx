'use client'
import { Box } from "@mui/material";
import FeedCard from "./feed-card/feed-card";
import styles from "./feed.styles.module.css";
import ProfileCard from "../ui/feed/left-section/profile-card/profile-card";
import OptionsCard from "../ui/feed/left-section/options-card/options-card";
import AnalyticsCard from "../ui/feed/left-section/analytics-card/analytics-card";
import LinkedinNews from "../ui/feed/right-section/linkedin-news";
import { feedData } from "@/data/feed";
import CreatePost from "./create-card/create-card";
import { useAppDispatch, useAppSelector } from "@/features/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllFeedAsync } from "@/features/feed/handle-feed/feed.action";
import CreatePostModal from "../ui/create-post/create-post";

export default function Feed() {
  const feeds = useAppSelector((state) => state.feed.feeds);
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchAllFeedAsync())
  },[])

  return (
    <Box className={styles.container}>
      <Box className={styles.sub_container}>
        <Box className={styles.left_section}>
          <ProfileCard />
          <AnalyticsCard />
          <OptionsCard />
        </Box>
        <Box className={styles.mid_section}>
          <CreatePostModal/>
          { feeds && 
            feeds.map((item) => (
              <FeedCard key={item.id} post={item}/>
            ))
          }
            
        </Box>
        <Box className={styles.right_section}>
          <LinkedinNews/>
        </Box>
      </Box>
    </Box>
  );
}
