import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import registerUser from 'routes/Register/registerSlice';
import login from 'routes/Login/loginSlice';
import recruitments from 'routes/Recruitments/recruitmentsSlice';

export const store = configureStore({
  reducer: {
    registerUser,
    login,
    recruitments,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
