import React from 'react';
import MyPost from './MyPost/MyPost';
import s from './Profile.module.css';
import Profile_info from './Profile_info/Profile_info';
const Profile = (props) => {
    return (
        <div >
            <Profile_info/>
            <MyPost new_post={props.profile_page.new_post_text} posts={props.profile_page.posts} dispatch={props.dispatch}/>
        </div>
    )
}
export default Profile;
