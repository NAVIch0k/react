import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { required } from '../../utilits/validation/validation'
import { Form_control} from '../Common/Forms_control/Forms_controls'
import s from './Login.module.css'
import style from '../Common/Forms_control/Forms_controls.module.css'   

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
                {props.error&&<div className={style.summary_error}>
                    {props.error}
                </div>}
                <button>login</button>
            </form>
        </div>
    )
}

const Login_form=reduxForm({form:'login'})(Login)

export default Login_form