import { createSlice } from '@reduxjs/toolkit';

const initialState = null;

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification(_state, action) {
      return action.payload;
    },
    clearNotification() {
      return null;
    },
  },
});

export const { setNotification, clearNotification } = notificationSlice.actions;

export const setNotificationWithTimeout = (message, timeout) => {
  return (dispatch) => {
    dispatch(setNotification(message));
    setTimeout(() => {
      dispatch(clearNotification());
    }, timeout * 1000);
  };
};

export default notificationSlice.reducer;
