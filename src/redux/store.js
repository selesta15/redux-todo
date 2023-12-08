import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import todoReducer from './todo/reduser'; 
import visibilityFilterReducer from './filter/reduser'; 

const rootReducer = combineReducers({
  todos: todoReducer,
  visibilityFilter: visibilityFilterReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
