import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { withRouter } from 'react-router-dom';
import { get_user_profile, get_user_status, update_user_status } from '../../redux/Profile_reducer'
import { WithAuthRedirect } from '../HOC/WithAuthRedirecr';
import { compose } from 'redux';
const Profile_cont = (props) => {

    useEffect(() => {
        let user_id = props.match.params.user_id
        if (!user_id) { user_id = 22420 }
        props.get_user_profile(user_id)
        props.get_user_status(user_id)
    }, [props.status])


    return (
        <Profile profile={props.profile} status={props.status} update_status={props.update_user_status} />
    )
}

let map_state_to_props = (state) => ({
    profile: state.profile_page.profile,
    status: state.profile_page.status
})

export default compose(
    connect(map_state_to_props, { get_user_profile, get_user_status, update_user_status }),
    withRouter,
    WithAuthRedirect
)(Profile_cont) 
