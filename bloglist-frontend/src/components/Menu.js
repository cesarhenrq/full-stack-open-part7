import React from 'react';

import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { UserInfo, LogoutButton } from './';

const Menu = () => {
  const user = useSelector((state) => state.user);

  if (!user) {
    return null;
  }

  const navbarStyles = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    padding: '0.5rem',
    gap: '0.5rem',
  };

  return (
    <div>
      <div style={navbarStyles} className="nav-bar">
        <Link to="/">blogs</Link>
        <Link to="/users">users</Link>
        <UserInfo user={user} />
        <LogoutButton />
      </div>

      <h2>blog app</h2>
    </div>
  );
};

export default Menu;
