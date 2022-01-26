import React from 'react';
import s from './MyPost.module.css';
import Post from './Posts/Post'



const MyPost = (props) => {
    let Posts_Element=props.posts.map(
        p=> <Post text={p.message} like={p.likes_count}/>
    
    )
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
