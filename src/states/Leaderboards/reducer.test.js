/**
 * test scenario for leaderboardsReducer

 * - leaderboardsReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the leaderboards when given by RECEIVE_LEADERBOARDS action
 */

import leaderboardsReducer from './reducer';

describe('userReducers function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = leaderboardsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the leaderboards when given by RECEIVE_LEADERBOARDS action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'leaderboards/receive',
      payload: {
        leaderboards: [{
          user: {
            id: 'users-1',
            name: 'John Doe',
            email: 'john@example.com',
            avatar: 'https://generated-image-url.jpg',
          },
          score: 10,
        },
        {
          user: {
            id: 'users-2',
            name: 'Jane Doe',
            email: 'jane@example.com',
            avatar: 'https://generated-image-url.jpg',
          },
          score: 5,
        }],
      },
    };

    // action
    const nextState = leaderboardsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.leaderboards);
  });
});
