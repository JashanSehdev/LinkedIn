'use client'
import { Comment } from "@/types/feed";
import { Avatar, Box } from "@mui/material";
import Image from "next/image";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import styles from "./comments.module.css";

type Prop = {
  comment: Comment;
};
export default function CommentCard(prop: Prop) {
  const { comment } = prop;
  return (
    <Box className={styles.container}>
      <Box className={styles.section1}>
        <Avatar src={comment.author.profileImage} />
      </Box>
      <Box className={styles.section2}>
        <Box className={styles.header}>
          <Box>
            <p className={styles.name}>{comment.author.name}</p>
            <p className={styles.bio}>{comment.author.headline}</p>
          </Box>
          <Box className={styles.options}>
            <p>9h</p>
            <p>Follow</p>
            <MoreHorizIcon fontSize="small"/>
          </Box>
        </Box>
        <Box className={styles.section3}>
          <p>{comment.text}</p>
        </Box>
      </Box>
    </Box>
  );
}
