const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
        posts: [
            {id:1, message:"Hi how are u", likesCount:12},
            {id:2, message:"Hi", likesCount:3},
            {id:3, message:"Yo", likesCount:10}
        ],
        newPostText: ''
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
                posts:[...state.posts, newPost],
                newPostText: ''
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.body,
            };

        default:
            return state;
    }
};

export default profileReducer;
export const  addPostActionCreator = () => ({
    type: ADD_POST
});


export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, body: text
})