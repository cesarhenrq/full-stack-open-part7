import Blog from './Blog';

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  initializeBlogs,
  likeBlog,
  removeBlog,
} from '../reducers/blogsReducer';

import getToken from '../utils/getToken';

const BlogsList = () => {
  const blogs = useSelector((state) => {
    const sortedBlogs = [...state.blogs].sort((a, b) => b.likes - a.likes);

    return sortedBlogs;
  });

  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

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

  return (
    <div>
      <h2>blogs</h2>
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          onLike={handleBlogLike}
          onDelete={handleBlogDelete}
        />
      ))}
    </div>
  );
};

export default BlogsList;
