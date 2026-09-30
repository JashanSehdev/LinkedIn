import { Box } from "@mui/material";
import SignupCard from "./signup-card/signup-card";
import styles from "./signup.module.css";
import linkedInLogon from '@/../public/LinkedIn-logo.png'
import Image from "next/image";

export default function SignUp() {
  return (
    <Box className={styles.container}>
      <Box >
        <Box className={styles.navBar}>
          <Image 
            src={linkedInLogon}
            alt="linkedIn Logo"
            width={180}
          />
        </Box>
      </Box>
      <Box className={styles.subContainer}>
        <p className={styles.title}>Join LinkedIn now — it’s free!</p>
        <SignupCard />
      </Box>
    </Box>
  );
}
