import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import {
  AiOutlineLike, AiFillLike, AiOutlineDislike, AiFillDislike, AiOutlineComment,
} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { postedAt } from '../../utils';

function ThreadItem({
  id,
  title,
  body,
  category,
  createdAt,
  ownerId,
  upVotesBy,
  downVotesBy,
  totalComments,
  user,
  authUser,
  upVote,
  downVote,
  onNeutralUpVote,
  onNeutralDownVote,
}) {
  const navigate = useNavigate();
  const isThreadUpVote = upVotesBy.includes(authUser);
  const isThreadDownVote = downVotesBy.includes(authUser);
  const onUpVoteClick = (event) => {
    event.stopPropagation();
    upVote(id);
  };

  const onDownVoteClick = (event) => {
    event.stopPropagation();
    downVote(id);
  };

  const onNeutralUpVoteClick = (event) => {
    event.stopPropagation();
    onNeutralUpVote(id);
  };
  const onNeutralDownVoteClick = (event) => {
    event.stopPropagation();
    onNeutralDownVote(id);
  };

  const onThreadClick = () => {
    navigate(`/threads/${id}`);
  };

  const onThreadPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      navigate(`/threads/${id}`);
    }
  };

  return (
    <div>
      <div role="button" tabIndex={0} className="thread-item" onClick={onThreadClick} onKeyDown={onThreadPress}>
        <div className="thread-item__user-photo">
          <img src={user.avatar} alt={user} />
        </div>
        <div className="thread-item__detail">
          <header>
            <div className="thread-item__category"><p>{`#${category}`}</p></div>
            <p className="thread-item__title">{title}</p>
          </header>
          <article>
            <div className="thread-item__text">{parse(body)}</div>
          </article>
        </div>
      </div>
      <div className="thread-item__footer">
        {
          upVote && (
          <div className="thread-item__likes">
            <p>
              <button type="button" aria-label="like" onClick={isThreadUpVote ? onNeutralUpVoteClick : onUpVoteClick}>
                { isThreadUpVote ? <AiFillLike style={{ color: '#dc3d4b' }} /> : <AiOutlineLike />}
              </button>
              {' '}
              {upVotesBy.length}
            </p>
          </div>
          )
        }
        {
          downVote && (
          <div className="thread-item__dislike">
            <p>
              <button type="button" aria-label="like" onClick={isThreadDownVote ? onNeutralDownVoteClick : onDownVoteClick}>
                { isThreadDownVote ? <AiFillDislike style={{ color: '#dc3d4b' }} /> : <AiOutlineDislike />}
              </button>
              {' '}
              {downVotesBy.length}
            </p>
          </div>
          )
        }
        <div className="thread-item__comments">
          <AiOutlineComment />
          <span>{totalComments}</span>
        </div>
        <p className="thread-item__created-at">{postedAt(createdAt)}</p>
        <p className="thread-item__user-name">
          Thread oleh
          {' '}
          {user.name}
        </p>
      </div>
    </div>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  ownerId: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.number.isRequired,
  authUser: PropTypes.string.isRequired,
  user: PropTypes.shape(userShape).isRequired,
};

ThreadItem.propTypes = {
  ...threadItemShape,
  upVote: PropTypes.func,
  downVote: PropTypes.func,
};

ThreadItem.defaultProps = {
  upVote: null,
  downVote: null,
};

export { threadItemShape };

export default ThreadItem;
