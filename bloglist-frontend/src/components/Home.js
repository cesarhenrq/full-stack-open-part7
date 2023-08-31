import { useRef } from 'react';

import { BlogsList, BlogForm, Togglable } from './';

import { useSelector } from 'react-redux';

import { Navigate } from 'react-router-dom';

const Home = () => {
  const blogFormRef = useRef();

  const user = useSelector((state) => state.user);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Togglable buttonLabel="new blog" ref={blogFormRef}>
        <BlogForm blogFormRef={blogFormRef} />
      </Togglable>
      <BlogsList />
    </div>
  );
};

export default Home;
