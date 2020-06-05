import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import dialogReducer from "./DialogReducer";
import usersReducer from "./usersReduser";
import AuthReducer from "./AuthReducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    usersPage: usersReducer,
    auth: AuthReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;