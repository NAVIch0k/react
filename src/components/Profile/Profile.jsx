import React from 'react';
import MyPost_cont from './MyPost/MyPost_cont';
import Profile_info from './Profile_info/Profile_info';
const Profile = (props) => {
    return (
        <div >
            <Profile_info {...props}/>
            <MyPost_cont/>
        </div>
    )
}
export default Profile;
