import { Connection } from "@/types/connection";
import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { fetchConnectionAsync } from "./handle-connections/connection.action";


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
