import { Avatar, Box, Paper, Typography } from "@mui/material";
import styles from './profile-card.module.css'

const bannerImage = 'https://images.unsplash.com/photo-1789479939747-48c1a0215889?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
const profilePic = 'https://i.pinimg.com/736x/ce/ad/94/cead941fca1ea8075e01f564f1eedf98.jpg'

export default function ProfileCard () {
    return (
        <Paper className={styles.container}>
            <Box
                component={'img'}
                src={bannerImage}
                className={styles.banner}
            />
            <Avatar className={styles.avatar} src={profilePic} />
            
            <Box className={styles.details}>
                
                <p className={styles.title}>Jashan Sehdev</p>
                <p className={styles.bio}>Software Engineer | webdev</p>
                <p className={styles.location}>Amritsar/Ludhiana Area</p>
            </Box> 
            
        </Paper>
    )
}