import { Box, Paper } from "@mui/material";
import styles from './control-card.module.css'
import { Dispatch, SetStateAction } from "react";

export default function ControlCard ({
    category,
    setCategory
} : {
    readonly category: string;
    readonly setCategory: Dispatch<SetStateAction<string>>
}) {
    console.log(category)
    return(
        <Paper className={styles.container}>
            {
                ['All', 'Jobs','My Posts', 'Mentions'].map((item, index) => (
                    <button className={ 
                        category===item.toLowerCase() ? styles.button_active : styles.button_base 
                    } 
                    key={index} onClick={()=>setCategory(item.toLowerCase().trim())}>{item}</button>
                ))
            }
        </Paper>
    )
}