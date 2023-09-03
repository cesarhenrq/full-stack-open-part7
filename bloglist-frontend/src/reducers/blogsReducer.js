import { createSlice } from '@reduxjs/toolkit';

import { blogService } from '../services';

import { setNotificationWithTimeout } from './notificationReducer';

import { logout } from './userReducer';

const initialState = [];

const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    setBlogs(_state, action) {
      return action.payload;
    },

    addBlog(state, action) {
      return [...state, action.payload];
    },

    like(state, action) {
      const { likedBlog } = action.payload;

      return state.map((blog) =>
        blog.id === likedBlog.id ? { ...likedBlog, user: blog.user } : blog,
      );
    },

    remove(state, action) {
      const { deletedBlog } = action.payload;

      return state.filter((blog) => blog.id !== deletedBlog.id);
    },

    update(state, action) {
      const { updatedBlog } = action.payload;

      return state.map((blog) =>
        blog.id === updatedBlog.id ? updatedBlog : blog,
      );
    },
  },
});

export const { setBlogs, addBlog, like, remove, update } = blogSlice.actions;

export const initializeBlogs = () => {
  return async (dispatch) => {
    try {
      const user = window.localStorage.getItem('user');

      if (user) {
        const blogs = await blogService.getAll();
        dispatch(setBlogs(blogs));
      }

      return;
    } catch (error) {
      dispatch(setNotificationWithTimeout(error.response.data.error, 5));
    }
  };
};

export const createBlog = (blog, token, user) => {
  return async (dispatch) => {
    try {
      const newBlog = await blogService.create(blog, token);
      const blogToDisplay = { ...newBlog, user };

      dispatch(addBlog(blogToDisplay));
      dispatch(
        setNotificationWithTimeout(`a new blog ${newBlog.title} added`, 5),
      );
    } catch (error) {
      if (error.response.status === 401) {
        dispatch(logout());
      }
      dispatch(setNotificationWithTimeout(error.response.data.error, 5));
    }
  };
};

export const likeBlog = (blog, token) => {
  return async (dispatch) => {
    try {
      const updatedBlog = {
        ...blog,
        likes: blog.likes + 1,
      };

      const likedBlog = await blogService.update(updatedBlog, token);

      dispatch(like({ likedBlog }));
    } catch (error) {
      if (error.response.status === 401) {
        dispatch(logout());
      } else if (error.response.status === 404) {
        dispatch(like({ likedBlog: blog }));
      }
      dispatch(setNotificationWithTimeout(error.response.data.error, 5));
    }
  };
};

export const removeBlog = (blog, token) => {
  return async (dispatch) => {
    try {
      await blogService.remove(blog, token);
      dispatch(remove({ deletedBlog: blog }));
    } catch (error) {
      if (error.response.status === 401) {
        dispatch(logout());
      } else if (error.response.status === 404) {
        dispatch(remove({ deletedBlog: blog }));
      }
      dispatch(setNotificationWithTimeout(error.response.data.error, 5));
    }
  };
};

export const addComment = (blog, comment, token) => {
  return async (dispatch) => {
    try {
      const updatedBlog = await blogService.addComment(blog, comment, token);

      dispatch(update({ updatedBlog }));
    } catch (error) {
      if (error.response.status === 401) {
        dispatch(logout());
      } else if (error.response.status === 404) {
        dispatch(remove({ deletedBlog: blog }));
      }
      dispatch(setNotificationWithTimeout(error.response.data.error, 5));
    }
  };
};

export default blogSlice.reducer;
