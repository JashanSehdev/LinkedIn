import { Box } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import styles from './searchbar.module.css'
import { ChangeEvent } from "react";
import debounce from 'debounce'
import { useAppDispatch } from "@/features/store";
import { fetchAllFeedAsync } from "@/features/feed/handle-feed/feed.action";

export default function Searchbar () {
    const dispatch = useAppDispatch()
    
    const debounceSearch = debounce((value :string) => {
    dispatch(fetchAllFeedAsync(value.trim()))
  }, 1000)
  const handleChange = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
     const {value} = e.target
     debounceSearch(value);
   }
    return(
        <Box className ={styles.container}>
            <SearchIcon/>
            <input 
                placeholder="Search"
                className={styles.input}
                onChange={handleChange}
            />
        </Box>
    )
}