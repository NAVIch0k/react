import React from 'react';
import s from './MyPost.module.css';
import Post from './Posts/Post'

let Post_Data=[
    {id: 1, message: 'How are you?', likes_count:122},
    {id: 2, message: 'My project', likes_count:233},
]

const MyPost = () => {
    return (
        <div>
            <h3>My Posts</h3>
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <div className={s.content_MyPost}>
                <Post text={Post_Data[0].message} like={Post_Data[0].likes_count}/>
                <Post text={Post_Data[1].message} like={Post_Data[1].likes_count}/>
            </div>
        </div>
    )
}
export default MyPost;
