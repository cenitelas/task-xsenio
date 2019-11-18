import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/reducer'


export default () => {
  const middleware = applyMiddleware(thunk);
  const store = createStore(reducer, middleware);
  return store;
};