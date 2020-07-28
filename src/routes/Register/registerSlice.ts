import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import { AppThunk, RootState } from 'app/store';
import api from 'api/auth';
import { User } from 'api/interfaces';

type Error = string | null;

interface RegisterState {
  error: Error;
  isLoading: boolean;
  loginError: string | null;
}

const initialState: RegisterState = {
  error: null,
  isLoading: false,
  loginError: null,
};

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    registerUserStart: (state) => {
      state.isLoading = true;
    },
    registerUserSuccess: (state) => {
      state.isLoading = false;
    },
    registerUserError: (state, action: PayloadAction<Error>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    loginError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
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
    if (
      err.response &&
      err.response.status === 500 &&
      err.response.data &&
      err.response.data.ErrorMessage
    ) {
      dispatch(loginError(err.response.data.ErrorMessage));
    }
    dispatch(registerUserError(err.toString()));
  }
};

export const selectRegister = (state: RootState): RegisterState => state.registerUser;

export default registerSlice.reducer;
