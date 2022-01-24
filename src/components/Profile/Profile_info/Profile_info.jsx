import React from 'react';
import s from './Profile_info.module.css';
const Profile_info = () => {
    return (
        <div className={s.profile_info}>
            <div className={s.content_img}></div>
            <div>ava + desription</div>
        </div>
    )
}
export default Profile_info;
