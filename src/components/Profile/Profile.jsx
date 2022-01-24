import React from 'react';
import MyPost from './MyPost/MyPost';
import s from './Profile.module.css';
import Profile_info from './Profile_info/Profile_info';
const Profile = () => {
    return (
        <div >
            <Profile_info/>
            <MyPost/>
        </div>
    )
}
export default Profile;
