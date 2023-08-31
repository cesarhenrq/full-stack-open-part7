import { createSlice } from '@reduxjs/toolkit';

import { userService } from '../services';

import { setNotificationWithTimeout } from './notificationReducer';

const initialState = [];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(_state, action) {
      return action.payload;
    },
  },
});

export const { setUsers } = usersSlice.actions;

export const initializeUsers = () => async (dispatch) => {
  try {
    const users = await userService.getAll();

    dispatch(setUsers(users));
  } catch (error) {
    dispatch(setNotificationWithTimeout(error.response.data.error, 'error', 5));
  }
};

export default usersSlice.reducer;
