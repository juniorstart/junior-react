import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import registerReducer from 'routes/Register/registerSlice';
import loginReducer from 'routes/Login/loginSlice';

export const store = configureStore({
  reducer: {
    registerUser: registerReducer,
    login: loginReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
