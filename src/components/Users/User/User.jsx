import React from 'react';
import s from './User.module.css'
import user_photo from './../../../img/logo.png'

const User = (props) => {
    return (
        <div>
            <span>
                <div>
                    <img src={props.u.photos.small!=null?props.u.photos.small:user_photo} className={s.photo} />
                </div>
                <div>
                    {props.u.followed ? <button onClick={() => { props.unfollow(props.u.id) }}>unfollow</button> : <button onClick={() => { props.follow(props.u.id) }}>follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{props.u.name}</div>
                    <div>{props.u.status}</div>
                </span>
                <span>
                    <div>{"props.u.location.country"}</div>
                    <div>{"props.u.location.city"}</div>
                </span>
            </span>
        </div>

    )
}

export default User