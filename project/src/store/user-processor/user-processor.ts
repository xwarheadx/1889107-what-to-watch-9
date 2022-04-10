import {createSlice} from '@reduxjs/toolkit';
import { AuthorizationStatus, TypeNames } from '../../const';
import {UserProcess} from '../../types/state';

const initialState: UserProcess = {
  requireAuthorization: AuthorizationStatus.Unknown,
  user: null,
};

export const userProcessor = createSlice({
  name: TypeNames.user,
  initialState,
  reducers: {
    requireAuthorization: (state, action) => {
      state.requireAuthorization = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    resetUser: (state) => {
      state.user = null;
    },
  },
});

export const {setUser, requireAuthorization, resetUser} = userProcessor.actions;
