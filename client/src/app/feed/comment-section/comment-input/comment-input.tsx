import { Avatar, Box, IconButton } from "@mui/material";
import EmojiPicker from "emoji-picker-react";
import styles from "./comment-input.module.css";
import { KeyboardEvent, useState } from "react";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { useAppDispatch } from "@/features/store";
import { createCommentAsync } from "@/features/feed/handle-feed/feed.action";


const profilePic = 'https://i.pinimg.com/736x/ce/ad/94/cead941fca1ea8075e01f564f1eedf98.jpg'

type Prop = {
    postId : number
}
export default function CommentInput({postId}: Prop) {
  const [toggleEmoji, setToggleEmoji] = useState(false);
  const [comment, setComment] = useState("");
  const dispatch = useAppDispatch()

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const {key, target} = event
    
    if (key !== 'Enter') return
    console.log(dispatch(createCommentAsync({postId, text: target.value })))

    
    
  };
  return (
    <Box className={styles.container}>
      <Avatar 
        src={profilePic}
      />
      <Box className={styles.inputContainer}>
        <input
          placeholder="Add a comment..."
          onKeyDown={handleKeyDown}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <IconButton onClick={() => setToggleEmoji(!toggleEmoji)}>
          <InsertEmoticonIcon />
        </IconButton>

        {toggleEmoji && (
          <Box className={styles.emojiTray}>
            <EmojiPicker
              onEmojiClick={(emojiData) => setComment((prev) => prev + emojiData.emoji)}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
}
