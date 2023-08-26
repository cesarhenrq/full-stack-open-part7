import { useState, useEffect, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setNotificationWithTimeout } from './reducers/notificationReducer';
import {
  initializeBlogs,
  createBlog,
  likeBlog,
  setBlogs,
  removeBlog,
} from './reducers/blogsReducer';

import Blog from './components/Blog';
import LoginForm from './components/LoginForm';
import UserInfo from './components/UserInfo';
import LogoutButton from './components/LogoutButton';
import BlogForm from './components/BlogForm';
import Notification from './components/Notification';
import Togglable from './components/Togglable';

import authService from './services/auth';

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

  const [user, setUser] = useState(null);

  const blogFormRef = useRef(null);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const user = await authService.authenticate(credentials);

      setUser(user);
      setCredentials({ username: '', password: '' });
      window.localStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
      dispatch(setNotificationWithTimeout(error.response.data.error, 5));
    }
  };

  const handleLogout = () => {
    setUser(null);
    window.localStorage.removeItem('user');
  };

  const handleCredentialsChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleBlogPost = async (blog) => {
    const token = getToken();
    try {
      blogFormRef.current.toggleVisibility();
      dispatch(createBlog(blog, token));

      dispatch(
        setNotificationWithTimeout(
          `A new blog ${blog.title} by ${blog.author} added`,
          5,
        ),
      );
    } catch (error) {
      if (error.response.status === 401) {
        handleLogout();
      }
      dispatch(setNotificationWithTimeout(error.response.data.error, 5));
    }
  };

  const handleBlogLike = async (blog) => {
    const token = getToken();
    try {
      dispatch(likeBlog(blog, token));
    } catch (error) {
      if (error.response.status === 401) {
        handleLogout();
      } else if (error.response.status === 404) {
        dispatch(setBlogs(blogs.filter((b) => b.id !== blog.id)));
      }
      dispatch(setNotificationWithTimeout(error.response.data.error, 5));
    }
  };

  const handleBlogDelete = async (blog) => {
    const token = getToken();
    try {
      dispatch(removeBlog(blog, token));
    } catch (error) {
      if (error.response.status === 401) {
        handleLogout();
      } else if (error.response.status === 404) {
        dispatch(setBlogs(blogs.filter((b) => b.id !== blog.id)));
      }
      dispatch(setNotificationWithTimeout(error.response.data.error, 5));
    }
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        dispatch(initializeBlogs());
      } catch (error) {
        dispatch(setNotificationWithTimeout(error.response.data.error, 5));
      }
    };

    user && fetchBlogs();
  }, [user, dispatch]);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('user');
    loggedUserJSON && setUser(JSON.parse(loggedUserJSON));
  }, []);

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
