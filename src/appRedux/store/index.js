
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/Auth';
import SettingsReducer from '../reducers/Settings';
import { composeWithDevTools } from "redux-devtools-extension";





const appReducer = combineReducers({
  authState: authReducer,
  settings:SettingsReducer,
  
  
});



export default function configureStore(preloadedState) {
  return createStore(
    appReducer,
    composeWithDevTools(),
    preloadedState,
    applyMiddleware(thunk),
  );
}
