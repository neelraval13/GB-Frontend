
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/Auth';
import SettingsReducer from '../reducers/Settings';





const appReducer = combineReducers({
  authState: authReducer,
  settings:SettingsReducer,
  
  
});



export default function configureStore(preloadedState) {
  return createStore(
    appReducer,
    preloadedState,
    applyMiddleware(thunk),
  );
}
