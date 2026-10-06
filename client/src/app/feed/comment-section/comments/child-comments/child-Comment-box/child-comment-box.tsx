import { Comment } from "@/types/feed";
import { Avatar, Box, Divider, ListItem, Typography } from "@mui/material";
import styles from './child-comment-box.module.css'

type Prop = {
  readonly comment: Comment;
};

const photo =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0PmcW6QpVxtWXOhqIIs8Cdwmjvyf79fPD9Y33Vxxe1A&s=10";
export default function ChildCommentBox({ comment }: Prop) {
  return (
    <Box className={styles.container}>
      <Divider/>
      <Avatar src={photo} />
      <Box>
        <Typography>{comment?.user?.username}</Typography>
        <Typography>{comment?.text}</Typography>
      </Box>
    </Box>
  );
}
