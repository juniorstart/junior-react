import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import { AppThunk, RootState } from 'app/store';
import api from 'api/recruitments';

type Error = string | null;

interface Data {
  id: number;
  companyName: string;
  city: string;
  workPlace: string;
  dateOfCompanyReply: string;
  applicationDate: string;
  companyReply: boolean;
  notes: string;
  linkToApplication: string;
  ownerId: number;
}

interface RecruitmentsState {
  error: Error;
  isLoading: boolean;
  data: Data[] | null;
}

const initialState: RecruitmentsState = {
  error: null,
  isLoading: false,
  data: null,
};

export const recruitmentsSlice = createSlice({
  name: 'recruitments',
  initialState,
  reducers: {
    getRecruitmentsStart: (state) => {
      state.isLoading = true;
      state.error = null;
      state.data = null;
    },

    getRecruitmentsSuccess: (state, action: PayloadAction<Data[]>) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    getRecruitmentsError: (state, action: PayloadAction<Error>) => {
      state.isLoading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getRecruitmentsStart,
  getRecruitmentsSuccess,
  getRecruitmentsError,
} = recruitmentsSlice.actions;

export const getRecruitments = (): AppThunk => async (dispatch: Dispatch) => {
  try {
    dispatch(getRecruitmentsStart());
    const { data } = await api.getRecruitments();
    dispatch(getRecruitmentsSuccess(data));
  } catch (err) {
    dispatch(getRecruitmentsError(err.toString()));
  }
};

export const selectRecruitments = (state: RootState): RecruitmentsState => state.recruitments;

export default recruitmentsSlice.reducer;
