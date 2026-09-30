'use client'

import { Box, Button, Typography } from "@mui/material"
import styles from './styles.module.css'
import Image from "next/image"
import googleLogo from '@/../public/google.png'

export default function Home () {
    return(
        <Box>
            <Box className={styles.container}>
               <Box className={styles.leftSection}>
                <h2 className={styles.heading} >Find your Dream Job and <br />Build you carrer </h2>
              

                <Box className={styles.buttons}>
                    <button className={styles.button1} > 
                        <Image 
                            style={{backgroundColor:'white', borderRadius: '100%'}}
                            width={45}
                            height={45}
                            src={googleLogo}
                            alt="google logo"
                        />
                        
                        Continue with Google</button>
                    <button className={styles.button2}>Sign in with the email</button>
                    <Box className={styles.conditions}>
                        <Typography>User Agreement, Privacy Policy, and Cookie Policy.</Typography>
                        <Typography>By clicking Continue to join or sign in, you agree to LinkedIn’s</Typography>
                        <Typography>User Agreement, Privacy Policy, and Cookie Policy.</Typography>
                    </Box>
                    <Box><Typography>New to LinkedIn?</Typography><Typography>Join Now</Typography></Box>
                </Box>
                </Box>
                <Box className={styles.rightSection}>
                    <Box 
                        component={'img'}
                        src="https://static.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4"
                    />
                </Box> 
            </Box>
        </Box>
    )
}