import {renderEntityTree} from "../render";

let state = {
    profilePage:{
        posts: [
            {id:1, message:"Hi how are u", likesCount:12},
            {id:2, message:"Hi", likesCount:3},
            {id:3, message:"Yo", likesCount:10}
        ]
    },
    dialogsPage:{
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How are u"},
            {id: 3, message: "Yo"}
        ],
        dialogs: [
            {id: 1, name: 'Sasha'},
            {id: 2, name: 'Boris'},
            {id: 3, name: 'Lena'}
        ]
    }
};

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0,
    };

    state.profilePage.posts.push(newPost);
    renderEntityTree(state);
}

export default state;