import React from 'react';
import MyPost from './MyPost/MyPost';
import s from './Profile.module.css';
const Profile = () => {
    return (
        <div >
            <div className={s.content_img}></div>
            <div>ava + desription</div>
            <MyPost/>
        </div>
    )
}
export default Profile;
