import React, { useEffect, useState } from 'react';
import s from './Profile_info.module.css';
import Preloader from '../../Common/Preloader/Preloader'
const Profile_info = (props) => {

    let [edit_mode, set_edit_mode] = useState(false)
    let [status,set_status]=useState(props.status)

    useEffect(()=>{
        set_status(props.status)
    },[props.status])

    const on_status_change=(e)=>{
        set_status(e.currentTarget.value)
    }

    const deactive_edit_mode = () => {
        set_edit_mode(true)
        props.update_status(status)
    }

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
                    {edit_mode
                        ?<input onChange={on_status_change} type="text" autoFocus={true} value={status} onBlur={()=>set_edit_mode(false)}/>
                        :<span onDoubleClick={deactive_edit_mode}>{status}</span>
                    }
                    <p>{props.profile.aboutMe}</p>
                    <p>{props.profile.lookingForAJobDescription}</p>
                    <p>{props.profile.contacts.vk}</p>
                </div>
            </div>
        </div>
    )
}
export default Profile_info;
