import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';

import { useField } from '../hooks';

import { createBlog } from '../reducers/blogsReducer';

import getToken from '../utils/helpers/getToken';

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
    <div className="blog-form-container">
      <h2>Create new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Title:
          <input name="title" id="title" {...title} />
        </div>
        <div>
          author:
          <input name="author" id="author" {...author} />
        </div>
        <div>
          url:
          <input name="url" id="url" {...url} />
        </div>
        <button type="submit" id="create-blog-button">
          create
        </button>
      </form>
    </div>
  );
};

BlogForm.propTypes = {
  blogFormRef: PropTypes.object.isRequired,
};

export default BlogForm;
