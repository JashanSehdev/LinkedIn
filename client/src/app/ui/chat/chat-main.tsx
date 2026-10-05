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
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import GifOutlinedIcon from "@mui/icons-material/GifOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import { useAppDispatch, useAppSelector } from "@/features/store";
import { fetchConnectionAsync } from "@/features/connection/handle-connections/connection.action";
import { useEffect, useRef, useState } from "react";
import { createChatAsync, getRoomAsync } from "@/features/chat/handle-chat/chat.actions";
import { useRouter } from "next/navigation";
import { createMessageAsync, fetchChatMessageAsync } from "@/features/message/handle-message/message.action";
import { SubmitHandler, useForm } from "react-hook-form";
import CloudinaryUploader from "./upload-widget/cloudinary-widget";


type Inputs = {
  text: string,
  file_url : string

}

export default function  ChatMain({roomId} : {roomId ?: number}) {
  const [addToChat, setAddToChat] = useState(false);
  const addToChatRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const connections = useAppSelector((state) => state.connection.connections);
  const chatrooms = useAppSelector((state) => state.room.chatRoom);
  const user = useAppSelector((state) => state.auth.user);
  const router = useRouter();
  const messages = useAppSelector((state) => state.messages.messages)



  //form handling
    const {
    register,
    handleSubmit,
    setValue,
   formState: { errors },
  } = useForm<Inputs>()

  const onSubmit  : SubmitHandler<Inputs> = (data : Inputs) => {
    if(!roomId) return
    const sendData = data.file_url ?{
      chat_id : roomId,
      text : data.text,
      files : [{
        file_url : data.file_url,
        file_name : "sticker",
        file_size : 0,
        file_type : 'cloudinary_url'
      }]
    } : {
      chat_id : roomId,
      text : data.text
    }
    dispatch(createMessageAsync(sendData))
  }

  
  useEffect(() => {
    if (!roomId) return
    dispatch(fetchChatMessageAsync(roomId))
  },[roomId, dispatch])

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
                  <ListItem key={room.roomId} onClick={() =>  router.push(`/messaging/${room.roomId}`)}>
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
                  <Typography>{'username '}</Typography>
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

                {
                  roomId && messages.map((item) => (<Paper key={item.id} className={styles.text} sx={{alignSelf:item.sender_id === user?.id ? "end" : "flex-start"}}> 
                  {
                    item.files && item.files.length > 0 && (
                      <>
                      <Box
                        component={'img'}
                        src={item.files[0].file_url}
                        alt="sticker"
                        height={100}
                        width={100}
                      />
                      </>
                    )
                  }
                    {item.text}
                  </Paper>))
                }
              </Box>
              <Box className={styles.chatPanel}>
                <form onSubmit={handleSubmit(onSubmit)}>
                <TextField fullWidth multiline rows={4} {...register('text')} />
                <input hidden {...register('file_url')} />
                <Box className={styles.bottomPanel}>
                  <Box>
                    <CloudinaryUploader setValue={setValue} fieldName="file_url" />

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
                    type="submit"
                  >
                    send
                  </Button>
                </Box>
                </form>
              </Box>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}
