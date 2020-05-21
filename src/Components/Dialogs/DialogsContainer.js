import React from "react";
import {sendMessageCreator, updateNewMessageCreator} from "../../Redux/DialogReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return{
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageCreator(body));
        },
        sendMessage: () => {
            debugger;
            dispatch(sendMessageCreator());
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
