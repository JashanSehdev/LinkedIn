import { Box, Paper } from '@mui/material'
import styles from './network.module.css'
import OptionsCard from '../ui/my-network/options/options'
import TopNav from '../ui/my-network/left-section/right_section/top-nav/top-nav'
import People from '../ui/my-network/left-section/right_section/people-you-may-know/people'


export default function Network() {
    return(
        <Box className={styles.container}>
            <Box className={styles.sub_container}>
                <Box className={styles.left_section}>
                    <OptionsCard/>
                </Box>
                <Box className={styles.right_section}>
                    <TopNav/>
                    <People/>
                </Box>
            </Box>
        </Box>
    )
}