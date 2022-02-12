import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { set_auth_user_data } from '../../redux/Auth_reducer'
import Header from './Header';
class Header_cont extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true }).then(Response => {
            let {id,email,login}=Response.data.data
            if (Response.data.resultCode === 0) {
                this.props.set_auth_user_data(id, email, login)
            }
        })
    }

    render() {
        return <Header {...this.props} />
    }
}

const map_dispatch_to_state = (state) => {
    return {
        is_auth:state.auth.is_auth,
        login:state.auth.login
    }
}

export default connect(map_dispatch_to_state, { set_auth_user_data })(Header_cont);