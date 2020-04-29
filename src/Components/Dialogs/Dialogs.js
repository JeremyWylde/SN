import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.state.messages.map(message => <Message message={message.message}/>);
    let newMessage = React.createRef();
    let addMessage = () =>{
        let message = newMessage.current.value;
        alert(message);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea ref={newMessage}></textarea>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )
}

export default Dialogs;
