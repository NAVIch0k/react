import React from 'react';
import User from './User/User';
import s from './Users.module.css'

const Users = (props) => {
    let pages_count= Math.ceil(props.total_count/props.page_size) 
    let pages=[]
    for(let i=1;i<=pages_count;i++){
        pages.push(i)
    }
    return (
        <div>
            {pages.map(el => <span key={el} className={props.current_page === el ? s.active : ""} onClick={() => { props.on_page_changed(el) }}>{el}</span>)}
            {props.users.map(u => <User key={u.id} u={u} following_in_progress={props.following_in_progress} is_following={props.is_following} unfollow={props.unfollow} follow={props.follow} />)}
        </div>
    )
}

export default Users