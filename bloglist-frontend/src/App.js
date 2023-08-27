import { useState, useEffect, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  initializeBlogs,
  createBlog,
  likeBlog,
  setBlogs,
  removeBlog,
} from './reducers/blogsReducer';
import { login, logout, initializeUser } from './reducers/userReducer';

import Blog from './components/Blog';
import LoginForm from './components/LoginForm';
import UserInfo from './components/UserInfo';
import LogoutButton from './components/LogoutButton';
import BlogForm from './components/BlogForm';
import Notification from './components/Notification';
import Togglable from './components/Togglable';

import getToken from './utils/getToken';

const App = () => {
  const dispatch = useDispatch();

  const blogs = useSelector((state) => {
    const sortedBlogs = [...state.blogs].sort((a, b) => b.likes - a.likes);

    return sortedBlogs;
  });

  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const user = useSelector((state) => state.user);

  const blogFormRef = useRef(null);

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(login(credentials));
    setCredentials({ username: '', password: '' });
  };

  const handleLogout = () => {
    dispatch(logout());
    dispatch(setBlogs([]));
  };

  const handleCredentialsChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleBlogPost = async (blog) => {
    const token = getToken();
    blogFormRef.current.toggleVisibility();
    dispatch(createBlog(blog, token, user));
  };

  const handleBlogLike = async (blog) => {
    const token = getToken();
    dispatch(likeBlog(blog, token));
  };

  const handleBlogDelete = async (blog) => {
    const token = getToken();
    dispatch(removeBlog(blog, token));
  };

  useEffect(() => {
    user && dispatch(initializeBlogs());
  }, [user, dispatch]);

  useEffect(() => {
    dispatch(initializeUser());
  }, [dispatch]);

  return (
    <div>
      {user ? (
        <>
          <UserInfo user={user} />
          <LogoutButton onClick={handleLogout} />
          <Notification />
          <Togglable buttonLabel="new blog" ref={blogFormRef}>
            <BlogForm handleBlogPost={handleBlogPost} />
          </Togglable>
          <h2>blogs</h2>
          {blogs.map((blog) => (
            <Blog
              key={blog.id}
              blog={blog}
              onLike={handleBlogLike}
              onDelete={handleBlogDelete}
            />
          ))}
        </>
      ) : (
        <>
          <Notification />
          <LoginForm
            credentials={credentials}
            onSubmit={handleLogin}
            onChange={handleCredentialsChange}
          />
        </>
      )}
    </div>
  );
};

export default App;
