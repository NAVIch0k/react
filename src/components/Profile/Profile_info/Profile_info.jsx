import React from 'react';
import s from './Profile_info.module.css';
import Preloader from '../../Common/Preloader/Preloader'
const Profile_info = (props) => {

    if(!props.profile){
        return <Preloader/>
    }

    return (
        <div className={s.profile}>
            <div className={s.profile_img}></div>
            <div className={s.profile_info}>
                <img className={s.profile_info_img} src={props.profile.photos.small}/>
                <div className={s.profile_info_about}>
                    <h2>{props.profile.fullName}</h2>
                    <span>{props.status}</span>
                    <input type="text" value={props.status} />
                    <p>{props.profile.aboutMe}</p>
                    <p>{props.profile.lookingForAJobDescription}</p>
                    <p>{props.profile.contacts.vk}</p>
                </div>
            </div>
        </div>
    )
}
export default Profile_info;
