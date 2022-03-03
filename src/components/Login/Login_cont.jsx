import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import { login_API } from '../../redux/Auth_reducer'
import Login_form from './Login'

class Login_cont extends React.Component {

    on_submit = (data) => {
        this.props.login_API(data)
    }

    render() {
        debugger
        if (!!this.props.id) {
            debugger
            return <Redirect to='/profile'/>
        }

        return (
            <Login_form onSubmit={this.on_submit} />
        )
    }
}

let map_state_to_props=(state)=>({id:state.auth.id})
export default connect(map_state_to_props,{login_API})(Login_cont)