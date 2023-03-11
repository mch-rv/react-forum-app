import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  TOGGLE_UPVOTE_THREAD_DETAIL: 'TOGGLE_UPVOTE_THREAD_DETAIL',
  TOGGLE_DOWNVOTE_THREAD_DETAIL: 'TOGGLE_DOWNVOTE_THREAD_DETAIL',
  CLEAR_UPVOTE_THREAD_DETAIL: 'CLEAR_UPVOTE_THREAD_DETAIL',
  CLEAR_DOWNVOTE_THREAD_DETAIL: 'CLEAR_DOWNVOTE_THREAD_DETAIL',
  ADD_COMMENT: 'ADD_COMMENT',
  TOGGLE_UPVOTE_COMMENT: 'TOGGLE_UPVOTE_COMMENT',
  TOGGLE_DOWNVOTE_COMMENT: 'TOGGLE_DOWNVOTE_COMMENT',
};

function receiveThreadDetailActionCreator(detailThread) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      detailThread,
    },
  };
}

function clearThreadDetailActionCreator() {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL,
  };
}

function toggleUpVoteThreadDetailActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_UPVOTE_THREAD_DETAIL,
    payload: {
      threadId,
      userId,
    },
  };
}

function toggleDownVoteThreadDetailActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_DOWNVOTE_THREAD_DETAIL,
    payload: {
      threadId,
      userId,
    },
  };
}

function clearUpVoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.CLEAR_UPVOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function clearDownVoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.CLEAR_DOWNVOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function addCommentActionCreator(comment) {
  return {
    type: ActionType.ADD_COMMENT,
    payload: {
      comment,
    },
  };
}

function toggleUpVoteCommentActionCreator({ userId, commentId }) {
  return {
    type: ActionType.TOGGLE_UPVOTE_COMMENT,
    payload: {
      userId,
      commentId,
    },
  };
}

function toggleDownVoteCommentActionCreator({ userId, commentId }) {
  return {
    type: ActionType.TOGGLE_DOWNVOTE_COMMENT,
    payload: {
      userId,
      commentId,
    },
  };
}

function asyncAddComment(threadId, content) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const comment = await api.createThreadComment({ threadId, content });
      dispatch(addCommentActionCreator(comment));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const detailThread = await api.getThreadDetail(threadId);
      dispatch(receiveThreadDetailActionCreator(detailThread));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncToogleUpVoteThreadDetail({ threadId }) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(toggleUpVoteThreadDetailActionCreator({ threadId, userId: authUser.id }));
    try {
      await api.toggleUpVoteThread({ threadId });
    } catch (error) {
      alert(error.message);
      dispatch(toggleUpVoteThreadDetailActionCreator({ threadId, userId: authUser.id }));
    }
    dispatch(hideLoading());
  };
}

function asyncToogleDownVoteThreadDetail({ threadId }) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(toggleDownVoteThreadDetailActionCreator({ threadId, userId: authUser.id }));
    try {
      await api.toggleDownVoteThread({ threadId });
    } catch (error) {
      alert(error.message);
      dispatch(toggleDownVoteCommentActionCreator({ threadId, userId: authUser.id }));
    }
    dispatch(hideLoading());
  };
}

function asyncClearUpVoteToggleThreadDetail({ threadId }) {
  return async (dispatch, getState) => {
    dispatch(showLoading());

    const { authUser } = getState();
    dispatch(clearUpVoteThreadDetailActionCreator(authUser.id));

    try {
      await api.toggleNeutralizeVoteThread({ threadId });
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncClearDownVoteToggleThreadDetail({ threadId }) {
  return async (dispatch, getState) => {
    dispatch(showLoading());

    const { authUser } = getState();
    dispatch(clearDownVoteThreadDetailActionCreator(authUser.id));

    try {
      await api.toggleNeutralizeVoteThread({ threadId });
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncToogleUpVoteComment(threadId, commentId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(toggleUpVoteCommentActionCreator({ userId: authUser.id, commentId }));
    try {
      await api.toggleUpVoteComment({ threadId, commentId });
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncToogleDownVoteComment(threadId, commentId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(toggleDownVoteCommentActionCreator({ userId: authUser.id, commentId }));
    try {
      await api.toggleDownVoteComment({ threadId, commentId });
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  toggleUpVoteThreadDetailActionCreator,
  toggleUpVoteCommentActionCreator,
  addCommentActionCreator,
  asyncReceiveThreadDetail,
  asyncToogleUpVoteThreadDetail,
  asyncToogleDownVoteThreadDetail,
  asyncClearUpVoteToggleThreadDetail,
  asyncClearDownVoteToggleThreadDetail,
  asyncAddComment,
  asyncToogleUpVoteComment,
  asyncToogleDownVoteComment,
};
