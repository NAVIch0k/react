import React from 'react';
import s from './MyPost.module.css';
import Post from './Posts/Post'




const MyPost = (props) => {
    let Posts_Element=props.posts.map(
        p=> <Post text={p.message} like={p.likes_count}/>
    
    )

    let new_post_element=React.createRef()

    let add_post=()=>{
        let text=new_post_element.current.value;
        props.add_post(text)
        new_post_element.current.value = ""
    }

    return (
        <div>
            <h3>My Posts</h3>
            <div>
                <textarea ref={new_post_element}></textarea>
                <button onClick={add_post}>Add Post</button>
            </div>
            <div className={s.content_MyPost}>
                {Posts_Element}
            </div>
        </div>
    )
}
export default MyPost;
