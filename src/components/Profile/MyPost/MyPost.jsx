import React from 'react';
import s from './MyPost.module.css';
import Post from './Posts/Post'

let posts=[
    {id: 1, message: 'How are you?', likes_count:122},
    {id: 2, message: 'My project', likes_count:233},
]

let Posts_Element=posts.map(
    p=> <Post text={p.message} like={p.likes_count}/>

)

const MyPost = () => {
    return (
        <div>
            <h3>My Posts</h3>
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <div className={s.content_MyPost}>
                {Posts_Element}
            </div>
        </div>
    )
}
export default MyPost;
