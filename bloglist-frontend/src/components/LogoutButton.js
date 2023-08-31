import React from 'react';

import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import { logout } from '../reducers/userReducer';
import { setBlogs } from '../reducers/blogsReducer';

const LogoutButton = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(setBlogs([]));
    navigate('/login');
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
