import React, {useEffect, useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(()=>{
        setStatus(props.status);
    },[props.status]);

    const activateEditMode = () => {
        if(props.isThisNotAuthorizedUser === false)
            setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    };


    return (
            <>
                {!editMode &&
                    <div>
                        <span onClick={activateEditMode} >{props.status || "------"}</span>
                    </div>
                }
                {editMode &&
                    <div>
                        <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                        value={status}/>
                    </div>
                }
            </>
        )
};

export default ProfileStatusWithHooks;