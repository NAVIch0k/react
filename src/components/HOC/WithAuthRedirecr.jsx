import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

let map_state_to_props_for_redirect = (state) => ({
    is_auth:state.auth.is_auth
})

export const WithAuthRedirect=(Component)=>{
    class RedirectComponent extends React.Component{
        render(){
            if(!this.props.is_auth) return <Redirect to={"/login"}/>
            return <Component {...this.props}/>
        }
    }

    let ConnectAuthRedirectComponent=connect(map_state_to_props_for_redirect)(RedirectComponent)

    return ConnectAuthRedirectComponent
}