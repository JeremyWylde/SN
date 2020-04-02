import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img src='https://cs16planet.ru/steam-avatars/images/avatar2700.jpg'></img>
            post 1
            <div>
            <span>Like</span>
            </div>
        </div>
    )
}

export default Post;