import React from 'react';
import MyPost_cont from './MyPost/MyPost_cont';
import s from './Profile.module.css';
import Profile_info from './Profile_info/Profile_info';
const Profile = (props) => {
    return (
        <div >
            <Profile_info/>
            <MyPost_cont/>
        </div>
    )
}
export default Profile;
