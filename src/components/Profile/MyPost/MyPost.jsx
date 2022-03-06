import React from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import s from './MyPost.module.css';
import Post from './Posts/Post'

const MyPost = (props) => {
    let Posts_Element = props.posts.map(
        p => <Post text={p.message} key={p.id} like={p.likes_count} />

    )

    let add_post = (value) => {
        props.add_post(value.profile_post_text)
    }

    return (
        <div>
            <Profile_post_redux onSubmit={add_post}/>
            <div className={s.content_MyPost}>
                {Posts_Element}
            </div>
        </div>
    )
}

const Profile_post = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <h3>My Posts</h3>
            <div>
                <Field component={'textarea'} name={'profile_post_text'}/>
                <button>Add Post</button>
            </div>
        </form>
    )
}

const Profile_post_redux = reduxForm({ form: 'profile_post' })(Profile_post)

export default MyPost;
