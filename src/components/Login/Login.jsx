import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { required } from '../../utilits/validation/validation'
import { Form_control} from '../Common/Forms_control/Forms_controls'
import s from './Login.module.css'

const Input=Form_control("input")

const Login = (props) => {
    return (
        <div className={s.auth}>
            <h1>Login</h1>
            <form onSubmit={props.handleSubmit}>
                <Field validate={[required]} name={'email'} placeholder='email' component={Input}/>
                <Field validate={[required]} name={'password'} type="password" placeholder='password'component={Input}/>
                <div>
                    <Field name={'remember_me'} component={Input} type="checkbox"/>
                    remember me
                </div>
                <button>login</button>
            </form>
        </div>
    )
}

const Login_form=reduxForm({form:'login'})(Login)

export default Login_form