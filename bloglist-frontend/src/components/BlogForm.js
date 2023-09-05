import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';

import { useField } from '../hooks';

import { createBlog } from '../reducers/blogsReducer';

import getToken from '../utils/helpers/getToken';

import { BlogFormContainer } from './BlogForm.styles';

const BlogForm = ({ blogFormRef }) => {
  const [title, resetTitle] = useField('text');
  const [author, resetAuthor] = useField('text');
  const [url, resetUrl] = useField('text');

  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const reset = () => {
    resetTitle();
    resetAuthor();
    resetUrl();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const token = getToken();

    const blog = {
      title: title.value,
      author: author.value,
      url: url.value,
    };
    dispatch(createBlog(blog, token, user));

    blogFormRef.current.toggleVisibility();

    reset();
  };

  return (
    <BlogFormContainer>
      <h2>Create new</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input name="title" id="title" {...title} />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input name="author" id="author" {...author} />
        </div>
        <div className="form-group">
          <label htmlFor="url">Url</label>
          <input name="url" id="url" {...url} />
        </div>
        <button type="submit" id="create-blog-button">
          create
        </button>
      </form>
    </BlogFormContainer>
  );
};

BlogForm.propTypes = {
  blogFormRef: PropTypes.object.isRequired,
};

export default BlogForm;
