import { useSelector, useDispatch } from 'react-redux';

import { useMatch, useNavigate } from 'react-router-dom';

import { Comments } from './';

import { likeBlog, removeBlog } from '../reducers/blogsReducer';

import { getToken } from '../utils/helpers/';

import { BlogContainer } from './Blog.styles';

const Blog = () => {
  const match = useMatch('/blogs/:id');

  const blog = useSelector((state) => {
    const blog = match
      ? state.blogs.find((blog) => blog.id === match.params.id)
      : null;

    return blog;
  });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleBlogLike = () => {
    const token = getToken();
    dispatch(
      likeBlog(
        {
          ...blog,
          user: blog.user.id,
          _id: blog.id,
        },
        token,
      ),
    );
  };

  const handleBlogDelete = () => {
    const shouldDelete = window.confirm(
      `Remove blog ${blog.title} by ${blog.author}?`,
    );
    const token = getToken();
    shouldDelete && dispatch(removeBlog(blog, token));
    navigate('/');
  };

  const isBlogCreatedByLoggedInUser = () => {
    const loggedInUsername = JSON.parse(
      window.localStorage.getItem('user'),
    ).username;
    return blog.user.username === loggedInUsername;
  };

  if (!blog) {
    return null;
  }

  return (
    <BlogContainer>
      <h2>
        {blog.title} {blog.author}
      </h2>
      <div className="blog-post-info">
        <a href={blog.url}>{blog.url}</a>
        <div>
          likes {blog.likes}{' '}
          <button onClick={handleBlogLike} className="like-button">
            like
          </button>
        </div>
        <div>added by {blog.user.name}</div>
        {isBlogCreatedByLoggedInUser() && (
          <button onClick={handleBlogDelete} className="remove-button">
            remove
          </button>
        )}
      </div>
      <Comments blog={blog} />
    </BlogContainer>
  );
};

export default Blog;
