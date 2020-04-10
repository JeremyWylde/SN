import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const Myposts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message='Hi how are u' likes= '2'/>
                <Post message='Its my first post' likes= '0'/>
            </div>
        </div>
    )
}

export default Myposts;