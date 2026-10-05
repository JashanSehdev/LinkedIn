"use client";
import { Box, Typography } from "@mui/material";
import FeedCard from "../feed-card/feed-card";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useAppDispatch } from "@/features/store";
import { fetchPostByIdAsync } from "@/features/feed/handle-feed/feed.action";
import { Post } from "@/types/feed";

export default function Feed() {
  const dispatch = useAppDispatch();
  const params = useParams();
  const id = params.id;
  const [post, setPost] = useState<Post | undefined>();
  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const result = await dispatch(fetchPostByIdAsync(id)).unwrap();
        setPost(result);
      } catch (err) {
        console.error(err);
        throw err;
      }
    };

    fetchRoom();
  }, []);

  
  return (
    <Box>
      {post ? <FeedCard post={post} /> : <Typography>No Post Found</Typography>}
    </Box>
  );
}
