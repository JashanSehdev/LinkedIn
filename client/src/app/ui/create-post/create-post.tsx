'use client'
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CreatePost from "@/app/feed/create-card/create-card";
import styles from "./create-post.module.css";
import {
  Avatar,
  Divider,
  FormHelperText,
  IconButton,
  TextField,
} from "@mui/material";
import z from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import CloudinaryUploader from "../upload-widget/cloudinary-widget";
import { createPostAsync } from "@/features/feed/handle-feed/feed.action";
import { useAppDispatch } from "@/features/store";
const profilePic =
  "https://i.pinimg.com/736x/ce/ad/94/cead941fca1ea8075e01f564f1eedf98.jpg";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const createPostSchema = z.object({
  content: z.string().min(1, "Content required"),
  media: z.string().optional(),
});

export type Inputs = z.infer<typeof createPostSchema>;
export default function CreatePostModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useAppDispatch()
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await dispatch(createPostAsync(data));

    handleClose();
  };

  return (
    <div>
      <Box onClick={handleOpen}>
        <CreatePost />
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box>
            <Avatar src={profilePic} />
          </Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              multiline
              rows={5}
              fullWidth
              className={styles.form_control}
              sx={{
                "& fieldset": { border: "none" },
                "&.Mui-focused fieldset": { border: "none" },
                "&:hover fieldset": { border: "none" },
              }}
              {...register("content")}
              placeholder="Enter Your Thoughts"
            />
            {errors.content && (
              <FormHelperText error>{errors.content.message}</FormHelperText>
            )}
            <Divider />
            <CloudinaryUploader setValue={setValue} />
            <Box>
              <Box></Box>
              <Button variant="contained" type="submit">
                Post
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
