import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import todoReducer from './todo/reduser'; 
import todoFilterReducer from './filter/reduser'; 

const rootReducer = combineReducers({
  todos: todoReducer,
  activeTodoFilter: todoFilterReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
