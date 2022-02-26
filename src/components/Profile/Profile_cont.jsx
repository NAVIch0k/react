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

    state={
        edit_mode:false,
        status:"okey"
    }

    active_edit_mode=()=>{
        this.setState({
            edit_mode:true
        })
    }

    deactive_edit_mode=()=>{
        this.setState({
            edit_mode:false
        })
    }

    render() {
        return (
            <Profile active_edit_mode={this.active_edit_mode} deactive_edit_mode={this.deactive_edit_mode} profile={this.props.profile} state={this.state}/>
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
