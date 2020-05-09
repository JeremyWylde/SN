const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const dialogReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessage = action.body;
            return state;
        case SEND_MESSAGE:
            let newMessage = {
                id: state.messages.length,
                message: state.newMessage
            }
            state.messages.push(newMessage);
            state.newMessage = '';
            return state;
        default:
            return state;
    }
}

export default dialogReducer;
export const  sendMessageCreator = () => ({
    type: SEND_MESSAGE
})


export const updateNewMessageCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: text
})