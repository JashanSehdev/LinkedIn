"use client";
import { Avatar, Box, Paper } from "@mui/material";
import Image from "next/image";
import li_Logo from "@/../public/Li-logo.png";
import styles from "./home-navbar.module.css";
import Searchbar from "./search-bar/searchbar";
import Link from "next/link";
import AccountMenu from "./account-menu/account-menu";

const profilePic =
  "https://i.pinimg.com/736x/ce/ad/94/cead941fca1ea8075e01f564f1eedf98.jpg";

export default function HomeNavbar() {
  return (
    <Paper className={styles.container}>
      <Box className={styles.wrapper}>
        <Box className={styles.section1}>
          <Image alt="LinkedIn logo" src={li_Logo} className={styles.logo} />
          <Searchbar />
        </Box>

        <Box className={styles.buttons}>
          <Link href={'/feed'} className={styles.button}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="home-active-medium"
              fill="currentColor"
              data-supported-dps="24x24"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path d="M23 9v2h-2v7a3 3 0 0 1-3 3h-4v-6h-4v6H6a3 3 0 0 1-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"></path>
            </svg>
            <p>Home</p>
          </Link>
          <Link href={'/mynetwork'} className={styles.button}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="people-active-medium"
              fill="currentColor"
              data-supported-dps="24x24"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path d="M12 6.5a4.5 4.5 0 1 1 4.5 4.5A4.49 4.49 0 0 1 12 6.5m6 6.5h-3a3 3 0 0 0-3 3v6h9v-6a3 3 0 0 0-3-3M6.5 6A3.5 3.5 0 1 0 10 9.5 3.5 3.5 0 0 0 6.5 6m1 9h-2A2.5 2.5 0 0 0 3 17.5V22h7v-4.5A2.5 2.5 0 0 0 7.5 15"></path>
            </svg>
            <p>My Network</p>
          </Link>
          <Link href={'/jobs'} className={styles.button}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="job-medium"
              fill="currentColor"
              data-supported-dps="24x24"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path d="M17 6V5a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v1H2v4a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V6zM9 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H9zm10 9a4 4 0 0 0 3-1.38V17a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-4.38A4 4 0 0 0 5 14z"></path>
            </svg>
            <p>Jobs</p>
          </Link>
          <Box className={styles.button}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="messages-medium"
              fill="currentColor"
              data-supported-dps="24x24"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path d="M16 4H8a7 7 0 0 0 0 14h4v4l8.16-5.39A6.78 6.78 0 0 0 23 11a7 7 0 0 0-7-7m-8 8.25A1.25 1.25 0 1 1 9.25 11 1.25 1.25 0 0 1 8 12.25m4 0A1.25 1.25 0 1 1 13.25 11 1.25 1.25 0 0 1 12 12.25m4 0A1.25 1.25 0 1 1 17.25 11 1.25 1.25 0 0 1 16 12.25"></path>
            </svg>
            <p>Messaging</p>
          </Box>
          <Link href={'/notifications'} className={styles.button}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="bell-fill-medium"
              fill="currentColor"
              data-supported-dps="24x24"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path d="M22 19h-8.28a2 2 0 1 1-3.44 0H2v-1a4.52 4.52 0 0 1 1.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0 1 22 18zM18.21 7.44A6.27 6.27 0 0 0 12 2a6.27 6.27 0 0 0-6.21 5.44L5 13h14z"></path>
            </svg>
            <p>Notification</p>
          </Link>
          {/* <Box className={styles.button}>
            <Avatar
              src={profilePic}
              className={styles.avatar}
              alt="profile pic"
            />
            <Box className={styles.caption}>
              <p>Me</p>
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
                <path d="M8 11 3 6h10Z" />
              </svg>
            </Box>
          </Box> */}
          <AccountMenu/>
          <Box className={styles.button} sx={{borderLeft: '1px solid gray'}}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="icon-grid"
              fill="currentColor"
              aria-hidden="true"
              data-supported-dps="16x16"
              viewBox="0 0 16 16"
              width="24"
              height="24"
            >
              <path d="M2 2h2.67v2.67H2zm4.67 2.67h2.67V2H6.67zM11.34 2v2.67h2.67V2zM2 9.33h2.67V6.66H2zm4.67 0h2.67V6.66H6.67zm4.67 0h2.67V6.66h-2.67zM2 14h2.67v-2.67H2zm4.67 0h2.67v-2.67H6.67zm4.67 0h2.67v-2.67h-2.67z"></path>
            </svg>
            <p>For Business</p>
          </Box>
          <Box className={`${styles.button} ${styles.special_button}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="premium-chip-v2-medium"
              aria-hidden="true"
              data-supported-dps="24x24"
              viewBox="0 0 24 24"
              data-token-id="673"
              width={24}
              height={24}
              className="c26322bb _57df2c34"
              style={{
                width: "24px",
                minWidth: "24px",
                height: "24px",
                minHeight: "24px",
              }}
            >
              <path
                fill="#e7a33e"
                d="M20.01 20.01c.63-.63.99-1.48.99-2.38V6.38C21 4.51 19.49 3 17.62 3H6.38c-.9 0-1.75.36-2.38.99l16.02 16.02z"
              />
              <path
                fill="#c37d16"
                d="M3.99 3.99C3.36 4.62 3 5.48 3 6.38v11.25c0 1.87 1.51 3.38 3.38 3.38h11.25c.9 0 1.75-.36 2.38-.99z"
              />
            </svg>
            <p>Try Premium for ₹0</p>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}
