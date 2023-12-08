import { FILTER_TODO } from './types';

const defaultState = 'SHOW_ALL';

const visibilityFilterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FILTER_TODO:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilterReducer;
