import { Blog } from './';

import { useDispatch, useSelector } from 'react-redux';

import { likeBlog, removeBlog } from '../reducers/blogsReducer';

import { getToken } from '../utils/helpers/';

const BlogsList = () => {
  const blogs = useSelector((state) => {
    const sortedBlogs = [...state.blogs].sort((a, b) => b.likes - a.likes);

    return sortedBlogs;
  });

  const dispatch = useDispatch();

  const handleBlogLike = async (blog) => {
    const token = getToken();
    dispatch(likeBlog(blog, token));
  };

  const handleBlogDelete = async (blog) => {
    const token = getToken();
    dispatch(removeBlog(blog, token));
  };

  return (
    <div>
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
