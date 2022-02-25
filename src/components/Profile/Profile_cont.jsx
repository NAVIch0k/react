import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { withRouter } from 'react-router-dom';
import { get_user_profile } from '../../redux/Profile_reducer'
import { WithAuthRedirect } from '../HOC/WithAuthRedirecr';
import { compose } from 'redux';
class Profile_cont extends React.Component {

    componentDidMount() {
        let user_id=this.props.match.params.user_id
        if(!user_id){user_id=2}
        this.props.get_user_profile(user_id)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let map_state_to_props = (state) => ({
    profile: state.profile_page.profile
})

export default compose(
    connect(map_state_to_props,{get_user_profile}),
    withRouter,
    WithAuthRedirect
)(Profile_cont) 
