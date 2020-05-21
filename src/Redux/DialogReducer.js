const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are u"},
        {id: 3, message: "Yo"}
    ],
    newMessage: "",
    dialogs: [
        {id: 1, name: 'Sasha'},
        {id: 2, name: 'Boris'},
        {id: 3, name: 'Lena'}
    ]
};

const dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessage: action.body
            };

        case SEND_MESSAGE:
            let newMessage = {
                id: state.messages.length,
                message: state.newMessage
            };
            return {
                ...state,
                newMessage: '',
                messages: [...state.messages, newMessage]
            };

        default:
            return state;
    }
};

export default dialogReducer;
export const  sendMessageCreator = () => ({
    type: SEND_MESSAGE
});


export const updateNewMessageCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: text
});