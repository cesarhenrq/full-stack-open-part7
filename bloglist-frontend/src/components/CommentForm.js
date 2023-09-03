import propTypes from 'prop-types';

import { useDispatch } from 'react-redux';

import { useField } from '../hooks';

import { addComment } from '../reducers/blogsReducer';

import { getToken } from '../utils/helpers';

const CommentForm = ({ blog }) => {
  const [comment, resetComment] = useField('text');

  const dispatch = useDispatch();

  const reset = () => {
    resetComment();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const token = getToken();
    dispatch(addComment(blog, comment.value, token));
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input {...comment} />
        <button type="submit">add comment</button>
      </form>
    </div>
  );
};

CommentForm.propTypes = {
  blog: propTypes.object.isRequired,
};

export default CommentForm;
