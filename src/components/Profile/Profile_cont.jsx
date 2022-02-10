import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { set_user_profile } from '../../redux/Profile_reducer'
import { withRouter } from 'react-router-dom';
class Profile_cont extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(Response => {
            this.props.set_user_profile(Response.data)
        })
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

let With_url_data_cont_comp = withRouter(Profile_cont)

export default connect(map_state_to_props, { set_user_profile })(With_url_data_cont_comp);
