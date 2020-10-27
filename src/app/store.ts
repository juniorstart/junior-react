import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import registerUser from 'routes/Register/registerSlice';
import login from 'routes/Login/loginSlice';

export const store = configureStore({
  reducer: {
    registerUser,
    login,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
