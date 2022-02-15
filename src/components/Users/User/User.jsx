import React from 'react';
import s from './User.module.css'
import user_photo from './../../../img/logo.png'
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { follow, unfollow } from '../../../API/API';

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
                            unfollow(props.u.id).then(Response => {
                                debugger
                                if (Response.data.resultCode === 0) {
                                    props.unfollow(props.u.id)
                                }
                            })
                        }}>unfollow</button>
                        : <button onClick={() => {
                            follow(props.u.id).then(Response => {
                                debugger
                                if (Response.resultCode === 0) {
                                    props.follow(props.u.id)
                                }
                            })
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