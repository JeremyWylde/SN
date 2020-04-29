import React from "react";
import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";
import Dialogs from "../Dialogs";

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
};

export default DialogItem;

DialogItem.propTypes = {
    name: PropTypes.number,
    id: PropTypes.object
};