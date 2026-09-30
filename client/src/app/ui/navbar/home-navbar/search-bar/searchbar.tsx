import { Box } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import styles from './searchbar.module.css'

export default function Searchbar () {
    return(
        <Box className ={styles.container}>
            <SearchIcon/>
            <input 
                placeholder="Search"
                className={styles.input}
            />
        </Box>
    )
}