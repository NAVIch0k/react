import React from 'react';
import { connect } from 'react-redux';
import { header_info_API,logout_API } from '../../redux/Auth_reducer'
import Header from './Header';
class Header_cont extends React.Component {

    componentDidMount() {
        this.props.header_info_API()
    }

    componentDidUpdate(prev_props, prev_state) {
        this.props.header_info_API()
    }

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

export default connect(map_dispatch_to_state, { header_info_API,logout_API })(Header_cont);