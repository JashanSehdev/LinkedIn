import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./searchbar.module.css";
import { ChangeEvent, useEffect, useState } from "react";
import debounce from "debounce";
import { useAppDispatch, useAppSelector } from "@/features/store";
import { fetchAllFeedAsync } from "@/features/feed/handle-feed/feed.action";
import { fetchUserByNameAsync } from "@/features/auth/handle-auth/auth.action";
import { redirect } from "next/navigation";
import { RedirectType } from "next/navigation";

export default function Searchbar() {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.auth.users);
  const [search, setSearch] = useState('')
  const debounceSearch = debounce((value: string) => {

    dispatch(fetchUserByNameAsync(value.trim()));
    console.log(users);
  }, 1000);

  useEffect(() => {
        if (!search) return;
        debounceSearch(search.trim());

  },[search, debounceSearch])
  return (
    <Box className={styles.container}>
      <SearchIcon />
      <input
        placeholder="Search"
        className={styles.input}
        onChange={(e) => setSearch(e.target.value.trim())}
      />
      { search && users.length !== 0 && <Paper className={styles.usersList}>
        <List >
          { users?.map((item) => (
            <ListItem key={item.id} onClick={() => redirect(`/in/${item.id}`)}>
              <ListItemAvatar>
                <Avatar />
              </ListItemAvatar>
              <ListItemText primary={item.username} /> 
              <Divider />
            </ListItem>
          ))}
        </List>
      </Paper>}
    </Box>
  );
}
