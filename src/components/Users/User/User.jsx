import React from 'react';
import s from './User.module.css'
import user_photo from './../../../img/logo.png'
import { NavLink } from 'react-router-dom';


const User = (props) => {
    return (
        <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + props.u.id}>
                        <img src={props.u.photos.small != null ? props.u.photos.small : user_photo} className={s.photo} />
                    </NavLink>
                </div>
                <div>
                    {props.u.followed
                        ? <button disabled={props.following_in_progress.some(id=>id===props.u.id)} onClick={() => {
                            props.fol_unfol(props.u.id,false)
                        }}>unfollow</button>
                        : <button disabled={props.following_in_progress.some(id=>id===props.u.id)} onClick={() => {
                            props.fol_unfol(props.u.id,true)
                        }}>follow</button>
                    }
                </div>
            </span>
            <span>
                <span>
                    <div>{props.u.name}</div>
                    <div>{props.u.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
            </span>
        </div>
    )
}

export default User