import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import { AppThunk, RootState } from 'app/store';
import api from 'api/recruitments';

type Error = string | null;

interface Recruitments {
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
  recruitments: Recruitments[];
}

const initialState: RecruitmentsState = {
  error: null,
  isLoading: false,
  recruitments: [],
};

export const recruitmentsSlice = createSlice({
  name: 'recruitments',
  initialState,
  reducers: {
    setRecruitmentsLoading: (state) => {
      state.isLoading = true;
      state.error = null;
      state.recruitments = [];
    },
    setRecruitments: (state, action: PayloadAction<Recruitments[]>) => {
      state.isLoading = false;
      state.recruitments = action.payload;
    },
    setRecruitmentsError: (state, action: PayloadAction<Error>) => {
      state.isLoading = false;
      state.recruitments = [];
      state.error = action.payload;
    },
  },
});

export const {
  setRecruitmentsLoading,
  setRecruitments,
  setRecruitmentsError,
} = recruitmentsSlice.actions;

export const getRecruitments = (): AppThunk => async (dispatch: Dispatch) => {
  try {
    dispatch(setRecruitmentsLoading());
    const { data } = await api.getRecruitments();
    dispatch(setRecruitments(data));
  } catch (err) {
    dispatch(setRecruitmentsError(err.toString()));
  }
};

export const selectRecruitments = (state: RootState): RecruitmentsState => state.recruitments;

export default recruitmentsSlice.reducer;
