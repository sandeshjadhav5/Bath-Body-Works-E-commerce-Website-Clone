import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { reducer as AppReducer } from "../Redux/AppReducer/reducer";
import { reducer as AuthReducer } from "../Redux/AuthReducer/reducer";
import { reducer as CartReducer } from "../Redux/CartReducer/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ AppReducer, AuthReducer, CartReducer });

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export { store };
