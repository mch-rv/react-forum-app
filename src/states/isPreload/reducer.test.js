/**
 * test scenario for isPreloadReducer

 * - isPreloadReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the isPreload when given by SET_IS_PRELOAD action
 */

import leaderboardsReducer from './reducer';

describe('isPreloadReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = leaderboardsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the isPreload when given by SET_IS_PRELOAD action', () => {
    // arrange
    const initialState = false;
    const action = {
      type: 'isPreload/set',
      payload: {
        isPreload: true,
      },
    };

    // action
    const nextState = leaderboardsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.isPreload);
  });
});
