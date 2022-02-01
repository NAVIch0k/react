import React from 'react';
import s from './MyPost.module.css';
import Post from './Posts/Post'

const MyPost = (props) => {
    
    let Posts_Element=props.posts.map(
        p=> <Post text={p.message} like={p.likes_count}/>
    
    )
    
    let on_post_change=(e)=>{
        let text = e.target.value;
        props.update_new_post(text)
    }
    let add_post=()=>{
        props.add_post()
    }
    return (
        <div>
            <h3>My Posts</h3>
            <div>
                <textarea onChange={on_post_change} value={props.new_post}/>
                <button onClick={add_post}>Add Post</button>
            </div>
            <div className={s.content_MyPost}>
                {Posts_Element}
            </div>
        </div>
    )
}
export default MyPost;
