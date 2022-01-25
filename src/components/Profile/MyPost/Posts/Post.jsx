import React from 'react';
import s from './Post.module.css';

const Post=(props)=>{
    return(
        <div className={s.content_post}>
            <img src="http://cdn.onlinewebfonts.com/svg/download_159991.png"/>
            <p className={s.post_text}>{props.text}</p>
            <span>like: {props.like}</span>
        </div>
    )
}
export default Post;
