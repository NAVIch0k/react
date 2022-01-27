import React from 'react';
import MyPost from './MyPost/MyPost';
import s from './Profile.module.css';
import Profile_info from './Profile_info/Profile_info';
const Profile = (props) => {
    return (
        <div >
            <Profile_info/>
            <MyPost posts={props.state.posts} add_post={props.profile_post}/>
        </div>
    )
}
export default Profile;
