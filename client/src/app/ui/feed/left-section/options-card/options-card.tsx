import { Box, Paper } from "@mui/material";
import styles from './options-card.module.css'

export default function OptionsCard () {
    return (
        <Paper className={styles.container}>
            <Box className={styles.option}>
                <svg xmlns="http://www.w3.org/2000/svg" id="bookmark-fill-small" fill="currentColor" aria-hidden="true" data-supported-dps="16x16" viewBox="0 0 16 16" data-token-id="190" width="16" height="16" className="c26322bb e29087c8 _57df2c34 _178c3696 _576523d0 bc32057b"><path d="M13 4a3 3 0 0 0-3-3H3v14l5-4.5 5 4.5z"></path></svg>
                <p>Saved Items</p>
            </Box>
            <Box className={styles.option}>
                <svg xmlns="http://www.w3.org/2000/svg" id="group-small" fill="currentColor" aria-hidden="true" data-supported-dps="16x16" viewBox="0 0 16 16" data-token-id="201" width="16" height="16" className="c26322bb e29087c8 _57df2c34 _178c3696 _576523d0 bc32057b"><path d="M8.5 7h-1A1.5 1.5 0 0 0 6 8.5V14h4V8.5A1.5 1.5 0 0 0 8.5 7m4.25 1h-.5A1.25 1.25 0 0 0 11 9.25V14h3V9.25A1.25 1.25 0 0 0 12.75 8"></path><circle cx="8" cy="4" r="2"></circle><circle cx="12.5" cy="5.5" r="1.5"></circle><path d="M3.75 8h-.5A1.25 1.25 0 0 0 2 9.25V14h3V9.25A1.25 1.25 0 0 0 3.75 8"></path><circle cx="3.5" cy="5.5" r="1.5"></circle></svg>
                <p>Groups</p>
            </Box>
            <Box className={styles.option}>
                <svg xmlns="http://www.w3.org/2000/svg" id="newspaper-small" fill="currentColor" aria-hidden="true" data-supported-dps="16x16" viewBox="0 0 16 16" data-token-id="340" width="16" height="16" className="c26322bb e29087c8 _57df2c34 _178c3696 _576523d0 bc32057b"><path d="M13 4v8H3V4zm2-2H1v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2zm-3 3H4v2h8zM7 8H4v3h3zm5 0H8v1h4zm0 2H8v1h4z"></path></svg>
                <p>Newsletter</p>
            </Box>
            <Box className={styles.option}>
                <svg xmlns="http://www.w3.org/2000/svg" id="calendar-small" fill="currentColor" aria-hidden="true" data-supported-dps="16x16" viewBox="0 0 16 16" data-token-id="193" width="16" height="16" className="c26322bb e29087c8 _57df2c34 _178c3696 _576523d0 bc32057b"><path d="M2 2v9a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V2zm8.5 1.5a1 1 0 1 1-1 1 1 1 0 0 1 1-1m-5 0a1 1 0 1 1-1 1 1 1 0 0 1 1-1M12 11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7h8z"></path></svg>
                <p>Events</p>
            </Box>
        </Paper>
    )
}