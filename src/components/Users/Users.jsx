import React from 'react';
import s from './User.module.css'
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

    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.avatar} className={s.photo} />
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
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}

export default Users