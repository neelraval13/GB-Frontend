import { createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as formReducer } from "redux-form";
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import authReducer from "../reducers/Auth";
import SettingsReducer from "../reducers/Settings";
import { composeWithDevTools } from "redux-devtools-extension";
import alertReducer from "../reducers/Alert";


const loggerMiddleware = createLogger();


const appReducer = combineReducers({
	authState: authReducer,
	settings: SettingsReducer,
	form: formReducer,
	alertState:alertReducer,
});

export default function configureStore(preloadedState) {
	return createStore(
		appReducer,
		composeWithDevTools(),
		preloadedState,
		applyMiddleware( 
			thunkMiddleware,
			loggerMiddleware)
	);
}
