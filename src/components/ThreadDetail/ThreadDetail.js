import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import {
  AiOutlineLike, AiFillLike, AiOutlineDislike, AiFillDislike,
} from 'react-icons/ai';
import { postedAt } from '../../utils';

function ThreadDetail({
  id,
  title,
  body,
  category,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
  authUser,
  upVote,
  downVote,
  onNeutralUpVote,
  onNeutralDownVote,
}) {
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

  return (
    <section className="thread-detail">
      <header>
        <p className="thread-detail__category">{`#${category}`}</p>
        <div className="thread-header__wrap">
          <img src={owner.avatar} alt={owner} />
          <p className="thread-detail__title">{title}</p>
        </div>
      </header>
      <article>
        <span className="thread-detail__text">{parse(body)}</span>
      </article>
      <footer>
        {
          upVote && (
          <div className="thread-detail__like">
            <button type="button" aria-label="like" onClick={isThreadUpVote ? onNeutralUpVoteClick : onUpVoteClick}>
              { isThreadUpVote ? <AiFillLike style={{ color: '#dc3d4b' }} /> : <AiOutlineLike />}
            </button>
            {' '}
            {upVotesBy.length}
          </div>
          )
        }
        {
          downVote && (
          <div className="thread-detail__dislike">
            <button type="button" aria-label="like" onClick={isThreadDownVote ? onNeutralDownVoteClick : onDownVoteClick}>
              { isThreadDownVote ? <AiFillDislike style={{ color: '#dc3d4b' }} /> : <AiOutlineDislike />}
            </button>
            {' '}
            {downVotesBy.length}
          </div>
          )
        }
        <p className="thread-detail__user-name">
          Thread Oleh
          {' '}
          {owner.name}
        </p>
        <p className="thread-detail__created-at">{postedAt(createdAt)}</p>
      </footer>
    </section>
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
  owner: PropTypes.shape(userShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  authUser: PropTypes.string.isRequired,
};

ThreadDetail.propTypes = {
  ...threadItemShape,
  upVote: PropTypes.func,
};

ThreadDetail.defaultProps = {
  upVote: null,
};

export default ThreadDetail;
