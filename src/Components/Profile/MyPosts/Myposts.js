import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const Myposts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likes={p.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () =>{
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    let onPostChange = () => {

    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}
                              value={props.newPostText}/>
                </div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default Myposts;