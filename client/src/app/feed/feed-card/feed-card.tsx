'use client'
import { Avatar, Box,  Divider, Paper } from "@mui/material";
import styles from "./feed-card.module.css";
import { postComments } from "@/data/comments";
import CommentCard from "../comment-section/comments/comments";
import {  useState } from "react";
import { useAppDispatch, useAppSelector } from "@/features/store";
import { fetchAllFeedAsync, likeAsync } from "@/features/feed/handle-feed/feed.action";
import { Post } from "@/types/feed";
import CommentSection from "../comment-section/comment-section";

type Like = {
  id : number,
  userId : number,
  postId: number
}

type Prop = {
  post: Post; 
};

const profilePic = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZoUCWyo0v99yE5-EXx56NlHdIsvsnOT0lFvj4CPqtJw&s=10'
export default function FeedCard({ post }: Prop) {
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) =>state.auth.user)
  const [showComments, setShowComments] = useState<boolean>(false);
  const isLiked = post?.likes?.some((like : Like) => like.userId === user?.id);
  const handleLike = async() => {
    await dispatch(likeAsync(post.id))
  }

  console.log('isLiked' , isLiked)
  return (
    <Paper className={styles.container}>
      <Box className={styles.section1}>
        <Box>
          <Avatar src={profilePic} className={styles.avatar} />
        </Box>
        <Box className={styles.author_data}>
          <Box className={styles.menubar}>
            <p className={styles.username}>{post?.author}</p>
            <button className={styles.follow_button}> + Follow</button>
          </Box>
          {/* <p className={styles.bio}>{post.author.headline}</p> */}
          <p className={styles.post_date}>1d</p>
        </Box>
      </Box>
      <Box>
        <p className={styles.description}>{post?.content}</p>
      </Box>
      <Box className={styles.images}>
        {
          post?.media && <Box className={styles.image} component={"img"} src={post?.media} />
        }
        
      </Box>
      <Box className={styles.like_section}>
        <p>{post?.likes?.length} likes</p>
        <Box>
          {/* {post.comments.length > 0 && <p>{post.comments.length} comments</p>} */}
        </Box>
      </Box>
      <Divider />
      <Box className={styles.buttons}>
        <Box className={styles.button} onClick={handleLike}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="thumbs-up-outline-small"
            fill={isLiked ? "red" : ""}
            aria-hidden="true"
            data-supported-dps="16x16"
            viewBox="0 0 16 16"
            data-token-id="289"
            width="16"
            height="16"
          >
            <path d="m12.91 7-2.25-2.57a8.2 8.2 0 0 1-1.5-2.55L9 1.37A2.08 2.08 0 0 0 7 0a2.08 2.08 0 0 0-2.06 2.08v1.17a5.8 5.8 0 0 0 .31 1.89l.28.86H2.38A1.47 1.47 0 0 0 1 7.47a1.45 1.45 0 0 0 .64 1.21 1.48 1.48 0 0 0-.37 2.06 1.54 1.54 0 0 0 .62.51h.05a1.6 1.6 0 0 0-.19.71A1.47 1.47 0 0 0 3 13.42v.1A1.46 1.46 0 0 0 4.4 15h4.83a5.6 5.6 0 0 0 2.48-.58l1-.42H14V7zM12 12.11l-1.19.52a3.6 3.6 0 0 1-1.58.37H5.1a.55.55 0 0 1-.53-.4l-.14-.48-.49-.21a.56.56 0 0 1-.34-.6l.09-.56-.42-.42a.56.56 0 0 1-.09-.68L3.55 9l-.4-.61A.28.28 0 0 1 3.3 8h5L7.14 4.51a4.2 4.2 0 0 1-.2-1.26V2.08A.09.09 0 0 1 7 2a.1.1 0 0 1 .08 0l.18.51a10 10 0 0 0 1.9 3.24l2.84 3z"></path>
          </svg>
          <span>Like</span>
        </Box>
        <Box className={styles.button} onClick={()=> setShowComments(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="comment-small"
            fill="currentColor"
            aria-hidden="true"
            data-supported-dps="16x16"
            viewBox="0 0 16 16"
            data-token-id="202"
            width="16"
            height="16"
            className="c26322bb _57df2c34 _576523d0 _7588a38c _178c3696 adc5e25e"
          >
            <path d="M5 8h5v1H5zm11-.5v.08a6 6 0 0 1-2.75 5L8 16v-3H5.5A5.51 5.51 0 0 1 0 7.5 5.62 5.62 0 0 1 5.74 2h4.76A5.5 5.5 0 0 1 16 7.5m-2 0A3.5 3.5 0 0 0 10.5 4H5.74A3.62 3.62 0 0 0 2 7.5 3.53 3.53 0 0 0 5.5 11H10v1.33l2.17-1.39A4 4 0 0 0 14 7.58zM5 7h6V6H5z"></path>
          </svg>
          <span>Comments</span>
        </Box>
        <Box className={styles.button}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="repost-small"
            fill="currentColor"
            aria-hidden="true"
            data-supported-dps="16x16"
            viewBox="0 0 16 16"
            data-token-id="255"
            width="16"
            height="16"
            className="c26322bb _57df2c34 _576523d0 _7588a38c _178c3696 adc5e25e"
          >
            <path d="M4 10H2V5c0-1.66 1.34-3 3-3h3.85L7.42 0h2.44L12 3 9.86 6H7.42l1.43-2H5c-.55 0-1 .45-1 1zm8-4v5c0 .55-.45 1-1 1H7.15l1.43-2H6.14L4 13l2.14 3h2.44l-1.43-2H11c1.66 0 3-1.34 3-3V6z"></path>
          </svg>
          <span>Repost</span>
        </Box>
        <Box className={styles.button}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="send-privately-small"
            fill="currentColor"
            aria-hidden="true"
            data-rtl="true"
            data-supported-dps="16x16"
            viewBox="0 0 16 16"
            data-token-id="232"
            width="16"
            height="16"
            className="c26322bb _57df2c34 _576523d0 _7588a38c _178c3696 adc5e25e"
          >
            <path d="M14 2 0 6.67l5 2.64 5.67-3.98L6.7 11l2.63 5z"></path>
          </svg>
          <span>Send</span>
        </Box>
      </Box>
      {
        showComments && <Divider/>
      }
      
      {
        showComments && (
          <Box className={styles.commentSection}>
            <CommentSection />
        {post.comments.map((comment) => (
          // <CommentItem key={comment.id} comment={comment} />
          <CommentCard key={comment.id} comment={comment}/>
        ))}
      </Box>
        )
      }
      
    </Paper>
  );
}
