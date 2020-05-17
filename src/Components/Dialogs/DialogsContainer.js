import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageCreator} from "../../Redux/DialogReducer";
import Dialogs from "./Dialogs";



const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    let addMessage = () =>{
        props.store.dispatch(sendMessageCreator());
    }

    let onMessageChange = (body) =>{
        props.store.dispatch(updateNewMessageCreator(body));
    }

    return <Dialogs updateNewMessageBody={onMessageChange} sendMessage={addMessage}
    dialogsPage={state}/>

}

export default DialogsContainer;
