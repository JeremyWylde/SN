import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../Utils/Validators/validators";
import {TextArea} from "../../Common/FormsControls/FormsControls";

const maxLength30 = maxLengthCreator(30);

const Myposts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likes={p.likesCount}/>);

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <NewPostForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
};

function NewPostForm (props) {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea} name={'newPostText'} validate={[required, maxLength30]}/>
            </div>
            <button>Add post</button>
        </form>
    )
}

NewPostForm = reduxForm({form: 'newPostForm'})(NewPostForm);

export default Myposts;