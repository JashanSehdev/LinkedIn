"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
import styles from "./account-menu.module.css";
import { useAppDispatch } from "@/features/store";
import { logoutUserAsync } from "@/features/auth/handle-auth/auth.action";
const profilePic =
  "https://i.pinimg.com/736x/ce/ad/94/cead941fca1ea8075e01f564f1eedf98.jpg";
export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const buttonRef = React.useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    requestAnimationFrame(() => {
      buttonRef.current?.focus();
    });
  };
  const handleLogout = async () => {
    try {
      setAnchorEl(null);
      await dispatch(logoutUserAsync()).unwrap();
      router.replace("/login");
    } catch (error) {
      console.error("Error occurred while logout", error);
    }
  };
  return (
    <React.Fragment>
      {" "}
      <Box
        ref={buttonRef}
        className={styles.button}
        onClick={handleClick}
        tabIndex={0}
        role="button"
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setAnchorEl(event.currentTarget);
          }
        }}
      >
        {" "}
        <Avatar
          src={profilePic}
          className={styles.avatar}
          alt="profile pic"
        />{" "}
        <Box className={styles.caption}>
          {" "}
          <p>Me</p>{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="caret-small"
            fill="currentColor"
            aria-hidden="true"
            data-supported-dps="16x16"
            viewBox="0 0 16 16"
            data-token-id="379"
            width={16}
            height={16}
            style={{
              width: "16px",
              minWidth: "16px",
              height: "16px",
              minHeight: "16px",
            }}
          >
            {" "}
            <path d="M8 11 3 6h10Z" />{" "}
          </svg>{" "}
        </Box>{" "}
      </Box>{" "}
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            elevation: 1,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              padding: "0.1rem 1rem",
              "& .MuiAvatar-root": { width: 32, height: 32, ml: -0.5, mr: 1 },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {" "}
        <Box className={styles.container}>
          {" "}
          <Box className={styles.section1}>
            {" "}
            <Box className={styles.profile}>
              {" "}
              <Avatar src={profilePic} alt="profile" />{" "}
              <Box>
                {" "}
                <Typography className={styles.username} variant="subtitle1">
                  {" "}
                  Jashan Sehdev{" "}
                </Typography>{" "}
                <Typography variant="body2">
                  {" "}
                  Software Engineer | Web Developer{" "}
                </Typography>{" "}
              </Box>{" "}
            </Box>{" "}
            <Button className={styles.profileView}> View Profile </Button>{" "}
          </Box>{" "}
        </Box>{" "}
        <Box className={styles.options}>
          {" "}
          <Typography
            color="disabled"
            variant="subtitle2"
            sx={{ fontWeight: "bolder" }}
          >
            {" "}
            Account{" "}
          </Typography>{" "}
          <Box>
            {" "}
            {["setting & Privacy", "Help", "language"].map((item, index) => (
              <Typography
                variant="subtitle2"
                className={styles.option}
                key={index}
              >
                {" "}
                {item}{" "}
              </Typography>
            ))}{" "}
          </Box>{" "}
        </Box>{" "}
        <Divider />{" "}
        <Box className={styles.options}>
          {" "}
          <Typography variant="subtitle2" sx={{ fontWeight: "bolder" }}>
            {" "}
            Manage{" "}
          </Typography>{" "}
          {["Posts & Activity", "Job Posting Account"].map((item, index) => (
            <Typography
              variant="subtitle2"
              className={styles.option}
              key={index}
            >
              {" "}
              {item}{" "}
            </Typography>
          ))}{" "}
        </Box>{" "}
        <Divider />{" "}
        <Typography
          variant="subtitle2"
          className={styles.signout}
          onClick={handleLogout}
          tabIndex={0}
        >
          {" "}
          Sign out{" "}
        </Typography>{" "}
      </Menu>{" "}
    </React.Fragment>
  );
}
