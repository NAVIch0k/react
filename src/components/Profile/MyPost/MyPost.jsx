import React from 'react';
import s from './MyPost.module.css';
import Post from './Posts/Post'
const MyPost = () => {
    return (
        <div>
            My Posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <div className={s.content_MyPost}>
                <Post text='Hi, how are you?' like="2"/>
                <Post text='Its my work' like="34"/>
            </div>
        </div>
    )
}
export default MyPost;
