import propTypes from 'prop-types';

const Comments = ({ comments }) => {
  const hasComments = comments.length > 0;

  return (
    <div>
      <h3>Comments</h3>
      {hasComments ? (
        <ul>
          {comments.map((comment) => (
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
  comments: propTypes.array.isRequired,
};

export default Comments;
