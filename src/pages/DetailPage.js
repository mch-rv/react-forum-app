import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ThreadDetail from '../components/ThreadDetail/ThreadDetail';
import CommentsList from '../components/Comment/CommentsList';
import ThreadCommentInput from '../components/ThreadDetail/ThreadCommentInput';
import {
  asyncReceiveThreadDetail,
  asyncToogleUpVoteThreadDetail,
  asyncToogleDownVoteThreadDetail,
  asyncAddComment,
  asyncToogleUpVoteComment,
  asyncToogleDownVoteComment,
  asyncClearUpVoteToggleThreadDetail,
  asyncClearDownVoteToggleThreadDetail,
} from '../states/threadDetail/action';

function DetailPage() {
  const { id } = useParams();
  const {
    detailThread = null,
    authUser,
  } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const onUpVote = (threadId) => {
    dispatch(asyncToogleUpVoteThreadDetail({ threadId }));
  };

  const onDownVote = (threadId) => {
    dispatch(asyncToogleDownVoteThreadDetail({ threadId }));
  };

  const onNeutralUpVote = (threadId) => {
    dispatch(asyncClearUpVoteToggleThreadDetail({ threadId }));
  };

  const onNeutralDownVote = (threadId) => {
    dispatch(asyncClearDownVoteToggleThreadDetail({ threadId }));
  };

  const onAddCommentThread = (threadId, content) => {
    dispatch(asyncAddComment(threadId, content));
  };

  const onCommentUpVote = ({ threadId }, commentId) => {
    dispatch(asyncToogleUpVoteComment(threadId, commentId));
  };

  const onCommentDownVote = ({ threadId }, commentId) => {
    dispatch(asyncToogleDownVoteComment(threadId, commentId));
  };

  if (!detailThread) {
    return null;
  }

  return (
    <section className="detail-page">
      <ThreadDetail
        {...detailThread}
        authUser={authUser.id}
        upVote={onUpVote}
        downVote={onDownVote}
        onNeutralUpVote={onNeutralUpVote}
        onNeutralDownVote={onNeutralDownVote}
      />
      <h2>Beri Komentar</h2>
      <ThreadCommentInput
        {...detailThread}
        authUser={authUser.id}
        onAddCommentThread={onAddCommentThread}
      />
      <CommentsList
        {...detailThread}
        authUser={authUser.id}
        onCommentUpVote={onCommentUpVote}
        onCommentDownVote={onCommentDownVote}
      />
    </section>
  );
}

export default DetailPage;
