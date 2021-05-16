import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { mainReducer } from '../reducers/mainReducer';

const store = createStore( combineReducers({ mainReducer }), {}, applyMiddleware( thunk )  );

export default store;