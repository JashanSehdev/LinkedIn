"use client";
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import styles from "./chat-main.module.css";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import GifOutlinedIcon from "@mui/icons-material/GifOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import { useAppDispatch, useAppSelector } from "@/features/store";
import { fetchConnectionAsync } from "@/features/connection/handle-connections/connection.action";
import { useEffect, useRef, useState } from "react";
import { createChatAsync, getRoomAsync } from "@/features/chat/handle-chat/chat.actions";

export default function ChatMain() {
  const [addToChat, setAddToChat] = useState(false);
  const addToChatRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const connections = useAppSelector((state) => state.connection.connections);
  const chatrooms = useAppSelector((state) => state.room.chatRoom);
  const handleConnections = async () => {
    if (addToChat) {
      setAddToChat(false);
      return;
    }
    setAddToChat(true);
    await dispatch(fetchConnectionAsync());
  };

  useEffect(() => {
    dispatch(getRoomAsync());
  }, [dispatch]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        addToChatRef.current &&
        !addToChatRef.current.contains(event.target as Node)
      ) {
        setAddToChat(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (
    <Container>
      <Paper>
        <Box className={styles.header}>
          <Box className={styles.searchContainer}>
            <Typography>Messaging</Typography>
            <input />
          </Box>

          <Box>
            <IconButton>
              <MoreHorizIcon />
            </IconButton>
            <IconButton onClick={handleConnections}>
              <BorderColorOutlinedIcon />
            </IconButton>
          </Box>
        </Box>
        <Box>
          <Divider />
          <Box className={styles.main}>
            <Paper>
              <List>
                {chatrooms.map((room) => (
                  <ListItem key={room.roomId}>
                    <ListItemAvatar>
                      <Avatar />
                    </ListItemAvatar>
                    <Box>
                      <Typography>{room?.user?.username}</Typography>
                    </Box>
                  </ListItem>
                ))}
              </List>
            </Paper>
            <Box>
              <Box className={styles.chatHeader}>
                <Box>
                  <Typography>Username</Typography>
                  <Typography variant="subtitle2">Mobile 6h</Typography>
                </Box>
                <Box>
                  <IconButton>
                    <MoreHorizIcon />
                  </IconButton>
                  <IconButton>
                    <StarBorderOutlinedIcon />
                  </IconButton>
                </Box>
              </Box>
              <Divider />
              <Box className={styles.chatArea}>
                {addToChat && (
                  <Box ref={addToChatRef} className={styles.addToChat}>
                    <List>
                      {connections.map((connection) => (
                        <ListItem key={connection.connectionId} onClick={()=>{dispatch(createChatAsync(connection.user.id)); dispatch(getRoomAsync())}}>
                          <ListItemAvatar>
                            <Avatar />
                          </ListItemAvatar>
                          <ListItemText secondary={connection?.user?.username} />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                )}
              </Box>
              <Box className={styles.chatPanel}>
                <TextField fullWidth multiline rows={4} />
                <Box className={styles.bottomPanel}>
                  <Box>
                    <IconButton>
                      <InsertPhotoOutlinedIcon />
                    </IconButton>

                    <IconButton>
                      <LinkOutlinedIcon />
                    </IconButton>

                    <IconButton>
                      <GifOutlinedIcon />
                    </IconButton>

                    <IconButton>
                      <SentimentSatisfiedAltOutlinedIcon />
                    </IconButton>
                  </Box>
                  <Button
                    variant="contained"
                    size="small"
                    className={styles.sendButton}
                  >
                    send
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}
