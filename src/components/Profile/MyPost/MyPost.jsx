import React from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import { max_length_creater, required } from '../../../utilits/validation/validation';
import { Form_control} from '../../Common/Forms_control/Forms_controls';
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

const max_length30=max_length_creater(30)
const Textarea = Form_control("textarea")

const Profile_post = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <h3>My Posts</h3>
            <div>
                <Field component={Textarea} name={'profile_post_text'} validate={[required,max_length30]}/>
                <button>Add Post</button>
            </div>
        </form>
    )
}

const Profile_post_redux = reduxForm({ form: 'profile_post' })(Profile_post)

export default MyPost;
