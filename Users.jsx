import axios from 'axios'
import React from 'react'
import s from './User.module.css'
import user_photo from './../../img/logo.png'

const Users = (props) => {
    if (props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(Response => {
            props.set_users(Response.data.items)
        })

    }


    let viewUser = () => {
        return props.users.map(u => <User key={u.id} u={u} unfollow={props.unfollow} folllow={props.follow} />)
    }
    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : user_photo} className={s.photo} />
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => { props.unfollow(u.id) }}>unfollow</button> : <button onClick={() => { props.follow(u.id) }}>follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}

export default Users