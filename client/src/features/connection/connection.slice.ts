import { Connection } from "@/types/connection";
import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { createConnectionAsync, fetchConnectionAsync } from "./handle-connections/connection.action";
import { createCommentAsync } from "../feed/handle-feed/feed.action";


type InitialState = {
  connections: Connection[];
};

const initialState: InitialState = {
  connections: []
};

const connectionSlice = createSlice({
  name: "connectionSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchConnectionAsync.fulfilled, (state, action: PayloadAction<Connection[]>) => {
        state.connections = action.payload
    })
   
 
  }
});

export default connectionSlice.reducer;
