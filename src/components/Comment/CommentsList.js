import React from 'react';
import PropTypes from 'prop-types';
import CommentsItem from './CommentsItem';

function CommentsList({
  id, comments, authUser, onCommentUpVote, onCommentDownVote,
}) {
  if (comments.length !== 0) {
    return (
      <div className="thread-detail__comments">
        <h2>
          Komentar(
          {comments.length}
          )
        </h2>
        <div className="thread-detail__comments-list">
          {
        comments.map((comment) => (
          <CommentsItem
            key={comment.id}
            threadId={id}
            {...comment}
            authUser={authUser}
            onCommentUpVote={onCommentUpVote}
            onCommentDownVote={onCommentDownVote}
          />
        ))
        }
        </div>
      </div>
    );
  }
  return (
    <div className="thread-detail__comments">
      <h2>
        Komentar(
        {comments.length}
        )
      </h2>
    </div>
  );
}

const commentsItemShape = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.object.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

CommentsList.propTypes = {
  id: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape(commentsItemShape)).isRequired,
  authUser: PropTypes.string.isRequired,
  onCommentUpVote: PropTypes.func.isRequired,
  onCommentDownVote: PropTypes.func.isRequired,
};

export default CommentsList;
