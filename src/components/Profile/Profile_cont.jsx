import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { withRouter } from 'react-router-dom';
import { get_user_profile, get_user_status,update_user_status } from '../../redux/Profile_reducer'
import { WithAuthRedirect } from '../HOC/WithAuthRedirecr';
import { compose } from 'redux';
class Profile_cont extends React.Component {

    componentDidMount() {
        let user_id = this.props.match.params.user_id
        if (!user_id) { user_id = 22420 }
        this.props.get_user_profile(user_id)
        this.props.get_user_status(user_id)
    }
    

    state = {
        edit_mode: false,
        status: this.props.status
    }

    active_edit_mode = () => {
        this.setState({
            edit_mode: true
        })
    }

    deactive_edit_mode = () => {
        this.setState({
            edit_mode: false
        })
        this.props.update_user_status(this.state.status)
    }

    on_status_change=(e)=>{
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prev_props,prev_state){
        if(prev_props.status!==this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <Profile on_status_change={this.on_status_change} update_status={this.props.update_user_status} active_edit_mode={this.active_edit_mode} deactive_edit_mode={this.deactive_edit_mode} profile={this.props.profile} state={this.state}/>
        )
    }
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
