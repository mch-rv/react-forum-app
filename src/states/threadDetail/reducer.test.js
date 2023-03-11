/**
 * test scenario for threadDetailReducers

 * - threadDetailReducers function
 *  - should return the initial state when given by unknown action
 *  - should return the detailThread when given by RECEIVE_THREAD_DETAIL action
 *  - should return null when given by CLEAR_THREAD_DETAIL action
 *  - should return the detailThread with the toggled upvote
 *    when given by TOGGLE_UPVOTE_THREAD_DETAIL
 *  - should return the detailThread with the toggled downvote
 *    when given by TOGGLE_DOWNVOTE_THREAD_DETAIL
 *  - should return the detailThread with the clear upvote when
 *    given by CLEAR_UPVOTE_THREAD_DETAIL
 *  - should return the detailThread with the clear downvote
 *    when given by CLEAR_DOWNVOTE_THREAD_DETAIL
 *  - should return the detailThread with the new comment when given by ADD_COMMENT action
 *  - should return the detailThread with the toggled comment upvote
 *    when given by TOGGLE_UPVOTE_COMMENT
 *  - should return the detailThread with the toggled comment downvote
 *    when given by TOGGLE_DOWNVOTE_COMMENT
 */

import threadDetailReducer from './reducer';

describe('threadDetailReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = null;
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the threads when given by RECEIVE_THREADS action', () => {
    // arrange
    const initialState = null;
    const action = {
      type: 'threadDetail/receive',
      payload: {
        detailThread: {
          id: 'thread-1',
          title: 'Thread Pertama',
          body: 'Ini adalah thread pertama',
          category: 'General',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
          comments: [
            {
              id: 'comment-1',
              content: 'Ini adalah komentar pertama',
              createdAt: '2021-06-21T07:00:00.000Z',
              owner: {
                id: 'users-1',
                name: 'John Doe',
                avatar: 'https://generated-image-url.jpg',
              },
              upVotesBy: [],
              downVotesBy: [],
            },
          ],
        },
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.detailThread);
  });

  it('should return null when given by CLEAR_THREAD_DETAIL action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };

    const action = {
      type: 'threadDetail/clear',
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(null);
  });

  it('should return the detailThread with the toggled upvote when given by TOGGLE_UPVOTE_THREAD_DETAIL', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };

    const action = {
      type: 'threadDetail/toggleUpVote',
      payload: {
        threadId: 'thread-1',
        userId: 'users-1',
      },
    };

    // action: upvote thread detail
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual({ ...initialState, upVotesBy: [action.payload.userId] });
  });

  it('should return the detailThread with the toggled downvote when given by TOGGLE_DOWNVOTE_THREAD_DETAIL', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };

    const action = {
      type: 'threadDetail/toggleDownVote',
      payload: {
        threadId: 'thread-1',
        userId: 'users-1',
      },
    };

    // action: downvote thread detail
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual({ ...initialState, downVotesBy: [action.payload.userId] });
  });

  it('should return the detailThread with the clear upvote when given by CLEAR_UPVOTE_THREAD_DETAIL', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: ['users-1'],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };

    const action = {
      type: 'threadDetail/clearUpVote',
      payload: {
        threadId: 'thread-1',
        userId: 'users-1',
      },
    };

    // action: clear upvote thread
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual({ ...initialState, upVotesBy: [] });
  });

  it('should return the detailThread with the clear downvote when given by CLEAR_DOWNVOTE_THREAD_DETAIL', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: ['users-1'],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };

    const action = {
      type: 'threadDetail/clearDownVote',
      payload: {
        userId: 'users-1',
      },
    };

    // action: clear downvote thread
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual({ ...initialState, downVotesBy: [] });
  });

  it('should return the detailThread with the new comment when given by ADD_COMMENT action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: ['users-1'],
      comments: [],
    };

    const action = {
      type: 'comment/add',
      payload: {
        comment: {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual({ ...initialState, comments: [action.payload.comment] });
  });

  it('should return the detailThread with the toggled comment upvote when given by TOGGLE_UPVOTE_COMMENT', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [{
        id: 'comment-1',
        content: 'Ini adalah komentar pertama',
        createdAt: '2021-06-21T07:00:00.000Z',
        owner: {
          id: 'users-1',
          name: 'John Doe',
          avatar: 'https://generated-image-url.jpg',
        },
        upVotesBy: [],
        downVotesBy: [],
      }],
    };

    const action = {
      type: 'comment/toggleUpVote',
      payload: {
        userId: 'users-1',
        commentId: 'comment-1',
      },
    };

    // action upvote comment
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual({
      ...initialState,
      comments: [{
        ...initialState.comments[0], upVotesBy: [action.payload.userId],
      }],
    });

    // action: clear upvote talk
    const nextState2 = threadDetailReducer(nextState, action);

    // assert
    expect(nextState2).toEqual(initialState);
  });
  it('should return the detailThread with the toggled comment downvote when given by TOGGLE_DOWNVOTE_COMMENT', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [{
        id: 'comment-1',
        content: 'Ini adalah komentar pertama',
        createdAt: '2021-06-21T07:00:00.000Z',
        owner: {
          id: 'users-1',
          name: 'John Doe',
          avatar: 'https://generated-image-url.jpg',
        },
        upVotesBy: [],
        downVotesBy: [],
      }],
    };

    const action = {
      type: 'comment/toggleDownVote',
      payload: {
        userId: 'users-1',
        commentId: 'comment-1',
      },
    };

    // action downvote comment
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual({
      ...initialState,
      comments: [{
        ...initialState.comments[0], downVotesBy: [action.payload.userId],
      }],
    });

    // action: clear upvote talk
    const nextState2 = threadDetailReducer(nextState, action);

    // assert
    expect(nextState2).toEqual(initialState);
  });
});
