import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ServerStatusState {
  status: string;
}

const initialState: ServerStatusState = {
  status: 'offline',
};

const serverStatusSlice = createSlice({
  name: 'serverStatus',
  initialState,
  reducers: {
    updateServerStatus: (state, action: PayloadAction<string>) => {
      state.status = action.payload;
    },
  },
});

export const { updateServerStatus } = serverStatusSlice.actions;

export default serverStatusSlice.reducer;
