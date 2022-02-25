import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { withRouter } from 'react-router-dom';
import { get_user_profile } from '../../redux/Profile_reducer'
import { WithAuthRedirect } from '../HOC/WithAuthRedirecr';
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

let AuthRedirectComponent=WithAuthRedirect(Profile_cont)

let map_state_to_props = (state) => ({
    profile: state.profile_page.profile
})

let With_url_data_cont_comp = withRouter(AuthRedirectComponent)

export default connect(map_state_to_props,{get_user_profile})(With_url_data_cont_comp);
