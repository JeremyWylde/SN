import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    if(!props.profile){
        return <></>
    }

    return (
        <div>
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQapJvfrVihBAZ1d8dYLUIE93TkYiuDj1CobwgQ8okmWShAucSE&usqp=CAU'></img>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                ava + descript
            </div>
        </div>
    )
}

export default ProfileInfo;