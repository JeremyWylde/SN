import {profileApi, usersApi as userApi} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: "Hi how are u", likesCount: 12},
        {id: 2, message: "Hi", likesCount: 3},
        {id: 3, message: "Yo", likesCount: 10}
    ],
    newPostText: '',
    profile: null,
    status: '',
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.body,
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };

        default:
            return state;
    }
};

export default profileReducer;

export const addPostActionCreator = () => ({
    type: ADD_POST
});

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, body: text
});

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE, profile
});
export const setStatus = (status) => ({
    type: SET_STATUS, status
});

export const getUserProfile = (userId) => (dispatch) => {
        userApi.getProfile(userId).then(response => {
                dispatch(setUserProfile(response.data));
            });
};

export const getStatus = (userID) => (dispatch) => {
        profileApi.getStatus(userID)
            .then(response => {
                dispatch(setStatus(response.data));
            });
};

export const updateStatus = (status) => (dispatch) => {
        profileApi.updateStatus(status)
            .then(response => {
                if(response.data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            });
};