import React from 'react';

import { useSelector } from 'react-redux';

import { UserInfo, LogoutButton } from './';

const BaseLayout = () => {
  const user = useSelector((state) => state.user);

  if (!user) {
    return null;
  }

  return (
    <div>
      <h2>blogs</h2>
      <UserInfo user={user} />
      <LogoutButton />
    </div>
  );
};

export default BaseLayout;
