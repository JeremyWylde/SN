import profileReducer from "./ProfileReducer";
import dialogReducer from "./DialogReducer";

let store ={
    _state: {
        profilePage:{
            posts: [
                {id:1, message:"Hi how are u", likesCount:12},
                {id:2, message:"Hi", likesCount:3},
                {id:3, message:"Yo", likesCount:10}
            ],
            newPostText: ''
        },
        dialogsPage:{
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How are u"},
                {id: 3, message: "Yo"}
            ],
            newMessage: '',
            dialogs: [
                {id: 1, name: 'Sasha'},
                {id: 2, name: 'Boris'},
                {id: 3, name: 'Lena'}
            ]
        },
    },
    _callSubscriber () {
        console.log('h')
    },

    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }

}






export default store;
window.store = store;