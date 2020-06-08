const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
};

const dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id:6, message: newMessage}]
            };

        default:
            return state;
    }
};

export const  sendMessageCreator = (newMessageBody) => ({
    type: SEND_MESSAGE,
    newMessageBody
});


export default dialogReducer;