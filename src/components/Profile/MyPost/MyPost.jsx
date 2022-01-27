import React from 'react';
import s from './MyPost.module.css';
import Post from './Posts/Post'




const MyPost = (props) => {
    let Posts_Element=props.posts.map(
        p=> <Post text={p.message} like={p.likes_count}/>
    
    )

    let new_post_element=React.createRef()

    
    let on_post_change=()=>{
        let text = new_post_element.current.value;
        props.update_new_post_text(text)
    }
    let add_post=()=>{
        props.add_post()
    }
    return (
        <div>
            <h3>My Posts</h3>
            <div>
                <textarea onChange={on_post_change} ref={new_post_element} value={props.new_post}/>
                <button onClick={add_post}>Add Post</button>
            </div>
            <div className={s.content_MyPost}>
                {Posts_Element}
            </div>
        </div>
    )
}
export default MyPost;
