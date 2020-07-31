import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import { AppThunk, RootState } from 'app/store';
import api from 'api/auth';
import { User } from 'api/interfaces';

type Error = string | null;

interface RegisterState {
  error: Error;
  isLoading: boolean;
  loginError: string | null;
  success: boolean;
}

const initialState: RegisterState = {
  error: null,
  isLoading: false,
  loginError: null,
  success: false,
};

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    registerUserStart: (state) => {
      state.isLoading = true;
      state.loginError = null;
      state.success = false;
    },
    registerUserSuccess: (state) => {
      state.isLoading = false;
      state.success = true;
    },
    registerUserError: (state, action: PayloadAction<Error>) => {
      state.isLoading = false;
      state.success = false;
      state.error = action.payload;
    },
    loginError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.success = false;
      state.loginError = action.payload;
    },
  },
});

export const {
  registerUserStart,
  registerUserSuccess,
  registerUserError,
  loginError,
} = registerSlice.actions;

export const registerUser = (user: User): AppThunk => async (dispatch: Dispatch) => {
  try {
    dispatch(registerUserStart());
    await api.register(user);
    dispatch(registerUserSuccess());
  } catch (err) {
    if (err?.response?.data?.ErrorMessage) {
      dispatch(loginError(err.response.data.ErrorMessage));
    }
    dispatch(registerUserError(err.toString()));
  }
};

export const selectRegister = (state: RootState): RegisterState => state.registerUser;

export default registerSlice.reducer;
