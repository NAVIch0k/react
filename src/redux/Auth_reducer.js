import { stopSubmit } from "redux-form"
import { header_info, auth } from "../API/API"

const SET_USER_DATA = 'SET_USER_DATA'

let initial_state = {
    id: null,
    email: null,
    login: null,
    is_auth: false
}
const Auth_reducer = (state = initial_state, action) => {

    switch (action.type) {
        case SET_USER_DATA: {
            return { ...state, ...action.data }
        }
        default:
            return state
    }
}


const set_auth_user_data = (id, email, login, is_auth=true) => ({ type: SET_USER_DATA, data: { id, email, login, is_auth } })


export const login_API = (data) => {
    return (dispatch) => {
        auth.login(data).then(Response => {
            if (Response.data.resultCode === 0) {
                dispatch(set_auth_user_data(Response.data.data.userId))
            }else{
                dispatch(stopSubmit('login',{_error:Response.data.messages[0]}))
            }
        })
    }
}

export const logout_API = () => {
    return (dispatch) => {
        auth.logout().then(Response => {
            if (Response.data.resultCode === 0) {
                dispatch(set_auth_user_data(null, null, null, false))
            }
        })
    }
}

export const header_info_API = () => {
    return (dispatch) => {
        header_info().then(Response => {
            if (Response.data.resultCode === 0) {
                let { id, email, login } = Response.data.data
                dispatch(set_auth_user_data(id, email, login))
            }
        })
    }
}

export default Auth_reducer