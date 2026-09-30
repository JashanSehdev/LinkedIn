import { Box, Paper, Typography } from '@mui/material'
import styles from './manage-notification-card.module.css'
import Link from 'next/link'

export default function ManageNotification () {
    return(
        <Paper className={styles.container}>
            <Typography className={styles.title}>Manage your Notification</Typography>
            <Typography className={styles.link} variant='subtitle2'>View Settings</Typography>

        </Paper>
    )
}