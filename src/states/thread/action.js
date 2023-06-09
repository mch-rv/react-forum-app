import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREADS: 'threads/receive',
  ADD_THREAD: 'threads/add',
  TOGGLE_UPVOTE_THREAD: 'threads/toggleUpVote',
  TOGGLE_DOWNVOTE_THREAD: 'threads/toggleDownVote',
  CLEAR_UPVOTE_THREAD: 'threads/clearUpVote',
  CLEAR_DOWNVOTE_THREAD: 'threads/clearDownVote',
};

function receiveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads,
    },
  };
}

function addThreadActionCreator(threads) {
  return {
    type: ActionType.ADD_THREAD,
    payload: {
      threads,
    },
  };
}

function toggleUpVoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_UPVOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function toggleDownVoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_DOWNVOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function clearUpVoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.CLEAR_UPVOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function clearDownVoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.CLEAR_DOWNVOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function asyncAddThread({ title, body, category }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const thread = await api.createThread({ title, body, category });
      dispatch(addThreadActionCreator(thread));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncToogleUpVoteThread({ threadId }) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(toggleUpVoteThreadActionCreator({ threadId, userId: authUser.id }));
    try {
      await api.toggleUpVoteThread({ threadId });
    } catch (error) {
      alert(error.message);
      dispatch(toggleUpVoteThreadActionCreator({ threadId, userId: authUser.id }));
    }
    dispatch(hideLoading());
  };
}

function asyncToogleDownVoteThread({ threadId }) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(toggleDownVoteThreadActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.toggleDownVoteThread({ threadId });
    } catch (error) {
      alert(error.message);
      dispatch(toggleDownVoteThreadActionCreator({ threadId, userId: authUser.id }));
    }
    dispatch(hideLoading());
  };
}

function asyncClearUpVoteToggleThread({ threadId }) {
  return async (dispatch, getState) => {
    dispatch(showLoading());

    const { authUser } = getState();
    dispatch(clearUpVoteThreadActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.toggleNeutralizeVoteThread({ threadId, userId: authUser.id });
    } catch (error) {
      alert(error.message);
      dispatch(clearUpVoteThreadActionCreator({ threadId, userId: authUser.id }));
    }

    dispatch(hideLoading());
  };
}

function asyncClearDownVoteToggleThread({ threadId }) {
  return async (dispatch, getState) => {
    dispatch(showLoading());

    const { authUser } = getState();
    dispatch(clearDownVoteThreadActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.toggleNeutralizeVoteThread({ threadId, userId: authUser.id });
    } catch (error) {
      alert(error.message);
      dispatch(clearDownVoteThreadActionCreator({ threadId, userId: authUser.id }));
    }

    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveThreadsActionCreator,
  addThreadActionCreator,
  toggleUpVoteThreadActionCreator,
  asyncAddThread,
  asyncToogleUpVoteThread,
  asyncToogleDownVoteThread,
  asyncClearUpVoteToggleThread,
  asyncClearDownVoteToggleThread,
};
