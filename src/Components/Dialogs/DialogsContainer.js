import React from "react";
import {sendMessageCreator, updateNewMessageCreator} from "../../Redux/DialogReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../Hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage,
    }
};

let mapDispatchToProps = (dispatch) => {
    return{
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageCreator());
        }
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)(Dialogs);
