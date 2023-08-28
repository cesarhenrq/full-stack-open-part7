import React from 'react';

import { useDispatch } from 'react-redux';

import { logout } from '../reducers/userReducer';
import { setBlogs } from '../reducers/blogsReducer';

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(setBlogs([]));
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
