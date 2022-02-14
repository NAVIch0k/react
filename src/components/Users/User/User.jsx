import React from 'react';
import s from './User.module.css'
import user_photo from './../../../img/logo.png'
import { NavLink } from 'react-router-dom';
import axios from 'axios';

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
                        ? <button onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.u.id}`,
                            { withCredentials: true,
                            headers:{"API-KEY":"bc2cc888-50d8-408c-a0fb-0fb9ec86d2d7"}
                            }).then(Response => {
                                if(Response.data.resultCode===0){
                                    props.unfollow(props.u.id)
                                }
                            })
                        }}>unfollow</button>
                        : <button onClick={() => {
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.u.id}`,{},
                            { withCredentials: true,
                            headers:{"API-KEY":"bc2cc888-50d8-408c-a0fb-0fb9ec86d2d7"}
                            }).then(Response => {
                                if(Response.data.resultCode===0){
                                    props.follow(props.u.id)
                                }
                            })
                        }}>follow</button>}
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