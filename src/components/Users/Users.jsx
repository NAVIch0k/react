import axios from 'axios'
import React from 'react'
import User from './User/User'

const Users = (props) => {

    let get_users = () => {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${(props.users.length + 10) / 10}`).then(Response => {
            props.set_users(Response.data.items)
        })
    }

    let viewUser = () => {
        return props.users.map(u => <User key={u.id} u={u} unfollow={props.unfollow} follow={props.follow} />)
    }

    return (
        <div>
            {viewUser()}
            <button onClick={get_users}>Get Users</button>
        </div>
    )
}

export default Users