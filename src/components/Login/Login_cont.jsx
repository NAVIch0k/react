import React from 'react'
import { connect } from 'react-redux'
import { login_API } from '../../redux/Auth_reducer'
import Login_form from './Login'

class Login_cont extends React.Component {

    on_submit = (data) => {
        this.props.login_API(data)
    }

    render() {
        return (
            <Login_form onSubmit={this.on_submit} />
        )
    }
}

let map_state_to_props=(state)=>{}
export default connect(map_state_to_props,{login_API})(Login_cont)