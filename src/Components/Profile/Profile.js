import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Myposts from "./MyPosts/Myposts";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <Myposts posts={props.profilePage.posts} newPostText={props.profilePage.newPostText} dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;