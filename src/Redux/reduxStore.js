import {combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import dialogReducer from "./DialogReducer";
import usersReducer from "./usersReduser";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

export default store;