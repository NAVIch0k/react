import React from 'react'
import Login_form from './Login'

const Login_cont = (props) => {

    let on_submit=(data)=>{
        console.log(data)
    }

    return (
        <Login_form onSubmit={on_submit}/>
    )
}

export default Login_cont