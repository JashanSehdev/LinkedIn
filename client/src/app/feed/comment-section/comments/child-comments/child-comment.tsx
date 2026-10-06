"use client";
import { useAppDispatch } from "@/features/store";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import ChildCommentBox from "./child-Comment-box/child-comment-box";
import { Comment } from "@/types/feed";
import { fetchChildComments } from "@/features/feed/handle-feed/feed.action";
import styles from './child-comment.module.css'

type Prop = {
  commentId: number;
};

export default function ChildComments({ commentId }: Prop) {
  const [loading, setLoading] = useState<boolean>(false);
  const [comments, setComments] = useState<Comment[]>([])

  const dispatch = useAppDispatch();
  useEffect(() => {
    const fetchChild = async () => {
      try {
        setLoading(true)
        const result = await dispatch(fetchChildComments(commentId)).unwrap();
        setComments(result)
      } catch (err) {
        console.error(err);
        throw err;
      } finally{
        setLoading(false)
      }
    };
    
    fetchChild()
  }, [dispatch]);

  return <Box className={styles.container}>
    {
        comments?.map((item) => (<ChildCommentBox key={item.id} comment={item} />))
    }
    
  </Box>;
}
