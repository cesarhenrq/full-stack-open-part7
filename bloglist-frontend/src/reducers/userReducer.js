import { createSlice } from '@reduxjs/toolkit';

import { authService } from '../services';

import { setNotificationWithTimeout } from './notificationReducer';

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    setUser(_state, action) {
      return action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export const login = (user) => {
  return async (dispatch) => {
    try {
      const loggedInUser = await authService.authenticate(user);
      const { username, name } = loggedInUser;

      dispatch(setUser({ username, name }));
      dispatch(
        setNotificationWithTimeout(
          {
            message: `${name} welcome back!`,
            type: 'success',
          },
          5,
        ),
      );
      window.localStorage.setItem('user', JSON.stringify(loggedInUser));
    } catch (error) {
      dispatch(
        setNotificationWithTimeout(
          {
            message: error.response.data.error,
            type: 'error',
          },
          5,
        ),
      );
    }
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch(setUser(null));
    window.localStorage.removeItem('user');
  };
};

export const initializeUser = () => {
  return (dispatch) => {
    const user = window.localStorage.getItem('user');
    user && dispatch(setUser(JSON.parse(user)));
  };
};

export default userSlice.reducer;
