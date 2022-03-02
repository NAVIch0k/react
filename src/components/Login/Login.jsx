import React from 'react'
import { Field, reduxForm } from 'redux-form'
import s from './Login.module.css'

const Login = (props) => {
    return (
        <div className={s.auth}>
            <h1>Login</h1>
            <form onSubmit={props.handleSubmit}>
                <Field name={'login'} placeholder='login' component={'input'}/>
                <Field name={'password'} placeholder='password'component={'input'}/>
                <div>
                    <Field name={'remember_me'} component={'input'} type="checkbox"/>
                    remember me
                </div>
                <button>login</button>
            </form>
        </div>
    )
}

const Login_form=reduxForm({form:'login'})(Login)

export default Login_form