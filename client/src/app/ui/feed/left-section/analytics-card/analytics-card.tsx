import { Box, Paper } from "@mui/material";
import styles from './analytics-card.module.css'

export default function AnalyticsCard () {
    return(
        <Paper className={styles.container}>
            <Box className={styles.option}>
                <p>post viewers</p>
                <p className={styles.blue}>31</p>
            </Box>
            
            <Box  className={styles.option}>
                <p>Post Impressions</p>
                <p className={styles.blue}>31</p>
            </Box>
        </Paper>
    )
}