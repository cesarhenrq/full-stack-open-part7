import propTypes from 'prop-types';

import { CommentForm } from './';

const Comments = ({ blog }) => {
  const hasComments = blog.comments.length > 0;

  return (
    <div>
      <h3>Comments</h3>
      <CommentForm blog={blog} />
      {hasComments ? (
        <ul>
          {blog.comments.map((comment) => (
            <li key={`${comment}-${Date.now}`}>{comment}</li>
          ))}
        </ul>
      ) : (
        'No comments yet'
      )}
    </div>
  );
};

Comments.propTypes = {
  blog: propTypes.object.isRequired,
};

export default Comments;
