import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageCreator} from "../../Redux/DialogReducer";



const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = state.messages.map(message => <Message message={message.message}/>);
    let newMessage = state.newMessage;

    let addMessage = () =>{
        props.sendMessage();
    }

    let onMessageChange = (e) =>{
        let text = e.target.value;
        props.updateNewMessageBody(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea onChange={onMessageChange} placeholder='Enter message' value={newMessage}></textarea></div>
                    <div><button onClick={addMessage}>Отправить</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
