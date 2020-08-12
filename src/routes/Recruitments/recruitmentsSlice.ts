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

interface RecruitmentState {
  error: Error;
  isLoading: boolean;
  data: Data[] | null;
}

const initialState: RecruitmentState = {
  error: null,
  isLoading: false,
  data: null,
};

export const recruitmentSlice = createSlice({
  name: 'recruitment',
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
} = recruitmentSlice.actions;

export const getRecruitments = (): AppThunk => async (dispatch: Dispatch) => {
  try {
    dispatch(getRecruitmentsStart());
    const { data } = await api.getRecruitments();
    dispatch(getRecruitmentsSuccess(data));
  } catch (err) {
    dispatch(getRecruitmentsError(err.toString()));
  }
};

export const selectRecruitments = (state: RootState): RecruitmentState => state.recruitments;

export default recruitmentSlice.reducer;
