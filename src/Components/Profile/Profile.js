import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MypostsContainer from "./MyPosts/MypostsContainer";
import {updateStatus} from "../../Redux/ProfileReducer";

const Profile = (props) => {
    let isThisNotAuthorizedUser = false;
    if(props.match.params.userId)
        isThisNotAuthorizedUser = true;
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}
                         isThisNotAuthorizedUser={isThisNotAuthorizedUser}/>
            <MypostsContainer />
        </div>
    )
}

export default Profile;