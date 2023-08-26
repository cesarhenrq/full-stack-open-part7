import { createSlice } from '@reduxjs/toolkit';
import blogService from '../services/blogs';

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
  },
});

export const { setBlogs, addBlog, like, remove } = blogSlice.actions;

export const initializeBlogs = () => {
  return async (dispatch) => {
    const blogs = await blogService.getAll();
    dispatch(setBlogs(blogs));
  };
};

export const createBlog = (blog, token) => {
  return async (dispatch) => {
    const newBlog = await blogService.create(blog, token);
    dispatch(addBlog(newBlog));
  };
};

export const likeBlog = (blog, token) => {
  return async (dispatch) => {
    const updatedBlog = {
      ...blog,
      likes: blog.likes + 1,
    };

    const likedBlog = await blogService.update(updatedBlog, token);

    dispatch(like({ likedBlog }));
  };
};

export const removeBlog = (blog, token) => {
  return async (dispatch) => {
    await blogService.remove(blog, token);
    dispatch(remove({ deletedBlog: blog }));
  };
};

export default blogSlice.reducer;
