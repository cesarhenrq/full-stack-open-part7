import { useEffect, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { initializeUser } from './reducers/userReducer';

import LoginForm from './components/LoginForm';
import UserInfo from './components/UserInfo';
import LogoutButton from './components/LogoutButton';
import BlogForm from './components/BlogForm';
import Notification from './components/Notification';
import Togglable from './components/Togglable';

import BlogsList from './components/BlogsList';

const App = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const blogFormRef = useRef(null);

  useEffect(() => {
    dispatch(initializeUser());
  }, [dispatch]);

  return (
    <div>
      {user ? (
        <>
          <UserInfo />
          <LogoutButton />
          <Notification />
          <Togglable buttonLabel="new blog" ref={blogFormRef}>
            <BlogForm blogFormRef={blogFormRef} />
          </Togglable>
          <BlogsList />
        </>
      ) : (
        <>
          <Notification />
          <LoginForm />
        </>
      )}
    </div>
  );
};

export default App;
