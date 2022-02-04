import React from 'react';
import s from './User.module.css'
import User from './User/User';

const Users = (props) => {
    if (props.users.length === 0) {
        props.set_users(
            [
                { id: 1, avatar: 'https://sun9-36.userapi.com/impg/3jd1BT0idMgbB1IPqOVJS1DG2pEsXDkyOto98g/Fppf0tKsJow.jpg?size=370x408&quality=96&sign=3230cc305a366e838ed94d5c96d4a435&type=album', followed: true, name: 'Ivan', status: 'im a god', location: { city: 'Moscow', country: 'Russia' } },
                { id: 2, avatar: 'https://sun9-36.userapi.com/impg/3jd1BT0idMgbB1IPqOVJS1DG2pEsXDkyOto98g/Fppf0tKsJow.jpg?size=370x408&quality=96&sign=3230cc305a366e838ed94d5c96d4a435&type=album', followed: false, name: 'Nikita', status: 'im a Nikita!', location: { city: 'Dnepr', country: 'Russia' } },
                { id: 3, avatar: 'https://sun9-36.userapi.com/impg/3jd1BT0idMgbB1IPqOVJS1DG2pEsXDkyOto98g/Fppf0tKsJow.jpg?size=370x408&quality=96&sign=3230cc305a366e838ed94d5c96d4a435&type=album', followed: true, name: 'Olya', status: 'top girl', location: { city: 'New Yourk', country: 'America' } },
            ]
        )
    }


    let viewUser = () => {
        return props.users.map(u => <User key={u.id} u={u} unfollow={props.unfollow} folllow={props.follow} />)
    }
    return (
        viewUser()
    )
}

export default Users