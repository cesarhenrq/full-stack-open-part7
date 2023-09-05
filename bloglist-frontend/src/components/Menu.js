import React from 'react';

import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { UserInfo, LogoutButton } from './';

import { MenuContainer } from './Menu.styles';

const Menu = () => {
  const user = useSelector((state) => state.user);

  if (!user) {
    return null;
  }

  return (
    <div>
      <MenuContainer>
        <Link to="/">blogs</Link>
        <Link to="/users">users</Link>
        <UserInfo user={user} />
        <LogoutButton />
      </MenuContainer>
      <h2>blog app</h2>
    </div>
  );
};

export default Menu;
