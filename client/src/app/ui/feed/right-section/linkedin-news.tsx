import { Box, Divider, Paper, Typography } from "@mui/material";
import styles from './linkedin-news.module.css'
import { news } from "@/data/news";

export default function LinkedinNews () {
    return (
        <Paper className={styles.container}>
            <Box className={styles.section1}>
                <Typography variant="h6">LinkedInNews</Typography>
                
                <span><svg xmlns="http://www.w3.org/2000/svg" id="signal-notice-small" fill="currentColor" aria-hidden="true" data-supported-dps="16x16" viewBox="0 0 16 16" data-token-id="53" width="16" height="16" className="c26322bb _57df2c34 _576523d0 _7588a38c _178c3696 adc5e25e"><path d="M12 2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m-3 8v2H7.5A1.5 1.5 0 0 1 6 10.5a1.6 1.6 0 0 1 .1-.5l1.08-3h2.13l-1.09 3zm0-3.75A1.25 1.25 0 1 1 10.25 5 1.25 1.25 0 0 1 9 6.25"></path></svg></span>
            </Box>
            <Divider/>
            <Typography className={styles.sub_title}>Top Stories</Typography>
            <Box>
                {
                    news.map((item, index) => (
                        <Box key={index} className={styles.news}>
                            <Typography variant={'body1'}className={styles.headline}>{item.headline}</Typography>
                            <Typography variant="caption" className={styles.readers}>{item.readers} readers</Typography>
                        </Box>
                    ))
                }
            </Box>
        </Paper>
    )
}