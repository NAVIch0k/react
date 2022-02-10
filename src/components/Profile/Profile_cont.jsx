import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
class Profile_cont extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(Response => {
            this.props.set_user_profile(Response.data)
        })
    }

    render() {
        return (
            <Profile {...this.props} />
        )
    }
}
export default connect()(Profile_cont);
