import { configureStore } from '@reduxjs/toolkit';

import serverStatusReducer  from './slices/serverStatusSlice';

const store = configureStore({
  reducer: {
    serverStatus: serverStatusReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;