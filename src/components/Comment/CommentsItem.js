import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import {
  AiOutlineLike, AiFillLike, AiOutlineDislike, AiFillDislike,
} from 'react-icons/ai';
import { postedAt } from '../../utils';

function CommentsItem({
  id,
  content,
  createdAt,
  owner, upVotesBy,
  downVotesBy,
  authUser,
  onCommentUpVote,
  onCommentDownVote,
  threadId,
}) {
  const isCommentUpVote = upVotesBy.includes(authUser);
  const isCommentDownVote = downVotesBy.includes(authUser);
  const onCommentUpVoteClick = (event) => {
    event.stopPropagation();
    onCommentUpVote({ threadId }, id);
  };
  const onCommentDownVoteClick = (event) => {
    event.stopPropagation();
    onCommentDownVote({ threadId }, id);
  };

  return (
    <>
      <div className="thread-detail__comments-header">
        <div className="thread-detail__comments-profile">
          <img src={owner.avatar} alt={owner} />
          <p>{owner.name}</p>
        </div>
        <p>{postedAt(createdAt)}</p>
      </div>
      <div className="thread-detail__comments-body">
        <p>{parse(content)}</p>
      </div>
      <footer className="thread-detail__like">
        {
          onCommentUpVote && (
            <p>
              <button type="button" aria-label="like" onClick={onCommentUpVoteClick}>
                { isCommentUpVote ? <AiFillLike style={{ color: '#dc3d4b' }} /> : <AiOutlineLike />}
              </button>
              {' '}
              {upVotesBy.length}
            </p>
          )
        }
        {
          onCommentDownVote && (
            <p>
              <button type="button" aria-label="like" onClick={onCommentDownVoteClick}>
                { isCommentDownVote ? <AiFillDislike style={{ color: '#dc3d4b' }} /> : <AiOutlineDislike />}
              </button>
              {' '}
              {downVotesBy.length}
            </p>
          )
        }
      </footer>
    </>
  );
}

const ownerShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

CommentsItem.propTypes = {
  id: PropTypes.string.isRequired,
  threadId: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  authUser: PropTypes.string.isRequired,
  onCommentUpVote: PropTypes.func,
  onCommentDownVote: PropTypes.func,
};

CommentsItem.defaultProps = {
  onCommentUpVote: null,
  onCommentDownVote: null,
};

export default CommentsItem;
