import { Box } from "@mui/material";
import LoginCard from "./login-card/login-card";
import styles from './login.module.css'

export default function login () {
    return(
        <Box className={styles.container}>

            <LoginCard/>
        </Box>
    )
}