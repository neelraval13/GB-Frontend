
import {createStore, combineReducers, applyMiddleware} from 'redux';
import authReducer from '../reducers/Auth';





const appReducer = combineReducers({
  authState: authReducer,
  
});



export default function configureStore(preloadedState) {
  return createStore(
    appReducer,
    preloadedState
  );
}
