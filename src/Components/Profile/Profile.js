import React from 'react';
import s from './Profile.module.css';
import Myposts from "./MyPosts/Myposts";

const Profile = () => {
    return (
        <div>
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQapJvfrVihBAZ1d8dYLUIE93TkYiuDj1CobwgQ8okmWShAucSE&usqp=CAU'></img>
            </div>
            <div>
                ava + descript
            </div>
            <Myposts/>
        </div>
    )
}

export default Profile;