import { GetUserCompanyAsync } from "@/features/job/handle-job/job.action";
import { useAppDispatch, useAppSelector } from "@/features/store";
import { Avatar, Box, Button, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import React, { SetStateAction, useEffect, Dispatch } from "react";
import styles from './select-company.module.css'
import { Company } from "@/types/job";

const logo_placeholder = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsR_A-Ga3tS4YQP7UpLqeD2SlMV8fK1B4eIhKHPS7QIA&s=10'

type Prop = {
    setcreateCompany : Dispatch<React.SetStateAction<boolean>>,
    setCompany : Dispatch<React.SetStateAction<Company | undefined>>
}
export default function SelectCompany({setcreateCompany, setCompany} : Prop) {
    const dispatch = useAppDispatch()    
    const companies = useAppSelector((state) => state.jobs.user_companies);
    console.log(companies)
    useEffect(() => {
        dispatch(GetUserCompanyAsync())
    }, [dispatch])
    return(
        <Box>
            <Box>
                <Typography variant="h4">Select Your Company</Typography>
                <List>
                    {
                        companies?.map((item) => 
                        <ListItem key={item.id} className={styles.listItem} onClick={()=>setCompany(item)}>
                            <ListItemAvatar>
                                <Avatar 
                                    src={ item.company_logo || logo_placeholder }
                                />
                            </ListItemAvatar>
                            <ListItemText>{item.company_name}</ListItemText>
                            <Typography variant="body2">{item.location}</Typography>
                        </ListItem>
                        )
                    }
                </List>

                <Button variant="contained" className={styles.button} onClick={() =>setcreateCompany(true)}>Create Company</Button>
            </Box>
        </Box>
    )
}