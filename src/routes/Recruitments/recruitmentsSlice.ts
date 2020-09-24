import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import { AppThunk, RootState } from 'app/store';
import api from 'api/recruitments';
import { CreateRecruitmentFormData } from '../../types/CreateRecruitmentFormData';
import ApiStatuses from "../../types/ApiStatuses";

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
  isFetching: boolean;
  updateStatus: keyof typeof ApiStatuses;
  recruitments: Recruitments[];
}

const initialState: RecruitmentsState = {
  error: null,
  isFetching: false,
  updateStatus: ApiStatuses.idle,
  recruitments: [],
};

export const recruitmentsSlice = createSlice({
  name: 'recruitments',
  initialState,
  reducers: {
    setRecruitmentsLoading: (state) => {
      state.isFetching = true;
      state.error = null;
      state.recruitments = [];
    },
    setRecruitments: (state, action: PayloadAction<Recruitments[]>) => {
      state.isFetching = false;
      state.recruitments = action.payload;
    },
    setRecruitmentsError: (state, action: PayloadAction<Error>) => {
      state.isFetching = false;
      state.recruitments = [];
      state.error = action.payload;
    },
    createRecruitmentLoading: (state) => {
      state.updateStatus = ApiStatuses.loading;
    },
    createRecruitmentSuccess: (state, action: PayloadAction<Recruitments[]>) => {
      state.updateStatus = ApiStatuses.succeeded;
    },
    createRecruitmentError: (state, action: PayloadAction<Error>) => {
      state.updateStatus = ApiStatuses.failed;
      state.error = action.payload;
    },
  },
});

export const {
  setRecruitmentsLoading,
  setRecruitments,
  setRecruitmentsError,
  createRecruitmentLoading,
  createRecruitmentSuccess,
  createRecruitmentError,
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

export const createRecruitment = (formData: CreateRecruitmentFormData): AppThunk => async (
  dispatch: Dispatch,
) => {
  try {
    dispatch(createRecruitmentLoading());
    const { data } = await api.createRecruitment(formData);
    dispatch(createRecruitmentSuccess(data));
  } catch (err) {
    dispatch(createRecruitmentError(err.toString()));
  }
};

export const selectRecruitments = (state: RootState): RecruitmentsState => state.recruitments;

export default recruitmentsSlice.reducer;
