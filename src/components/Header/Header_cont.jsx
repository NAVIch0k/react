import React from 'react';
import { connect } from 'react-redux';
import { logout_API } from '../../redux/Auth_reducer'
import Header from './Header';
class Header_cont extends React.Component {

    render() {
        return <Header {...this.props}  />
    }
}

const map_dispatch_to_state = (state) => {
    return {
        is_auth: state.auth.is_auth,
        login: state.auth.login
    }
}

export default connect(map_dispatch_to_state, {logout_API })(Header_cont);