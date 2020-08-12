import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import { AppThunk, RootState } from 'app/store';
import api from 'api/auth';
import { Auth } from 'api/interfaces';

interface LoginError {
  message: string;
}

type Error = string | null;

interface LoginState {
  error: Error;
  isLoading: boolean;
  loginError: LoginError | null;
  token: string | null;
}

const initialState: LoginState = {
  error: null,
  isLoading: false,
  loginError: null,
  token: null,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginUserStart: (state) => {
      state.isLoading = true;
      state.loginError = null;
    },
    loginUserSuccess: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.token = action.payload;
    },
    loginUserError: (state, action: PayloadAction<Error>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    loginError: (state, action: PayloadAction<LoginError>) => {
      state.isLoading = false;
      state.loginError = action.payload;
    },
    deleteToken: (state) => {
      state.token = null;
    },
  },
});

export const {
  loginUserStart,
  loginUserSuccess,
  loginUserError,
  loginError,
  deleteToken,
} = loginSlice.actions;

export const loginUser = (user: Auth): AppThunk => async (dispatch: Dispatch) => {
  try {
    dispatch(loginUserStart());
    const { data } = await api.login(user);
    dispatch(loginUserSuccess(data));
  } catch (err) {
    if (err?.response?.data?.ErrorMessage) {
      dispatch(loginError({ message: err.response.data.ErrorMessage }));
    }
    dispatch(loginUserError(err.toString()));
  }
};

export const selectLogin = (state: RootState): LoginState => state.login;

export default loginSlice.reducer;
