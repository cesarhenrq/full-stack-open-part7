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
  },
});

export const { setBlogs, addBlog } = blogSlice.actions;

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

export default blogSlice.reducer;
