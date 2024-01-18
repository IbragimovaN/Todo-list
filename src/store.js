import {
	legacy_createStore as createStore,
	combineReducers,
	applyMiddleware,
	compose,
} from "redux";
import { thunk } from "redux-thunk";
import { controlPanelReducer, todoReducer, todoFieldReducer } from "./redusers";

export const reducer = combineReducers({
	controlPanelState: controlPanelReducer,
	todoFieldState: todoFieldReducer,
	todoState: todoReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
	reducer,
	composeEnhancers(applyMiddleware(thunk)),
);
