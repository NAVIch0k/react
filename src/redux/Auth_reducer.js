import { header_info, login } from "../API/API"

const SET_USER_DATA = 'SET_USER_DATA'
const LOGIN ='LOGIN'

let initial_state = {
    id:null,
    email:null,
    login:null,
    is_auth:false
}
const Auth_reducer = (state=initial_state, action) => {

    switch (action.type) {
        case SET_USER_DATA:{
            return{...state,...action.data,is_auth:true}
        }
        case LOGIN:{
            debugger
            return{...state,...action.data.id,is_auth:true}
        }
        default:
            return state
    }
}


const set_auth_user_data=(id,email,login)=>({type:SET_USER_DATA,data:{id,email,login}})
const login_AC=(id)=>({type:LOGIN,data:{id:id,is_auth:true}})

export const login_API=(data)=>{
    return(dispatch)=>{
        login(data).then(Response=>{
            if (Response.data.resultCode === 0) {
                dispatch(login_AC(Response.data.data.userId))
            }
        })
    }
}

export const header_info_API=()=>{
    return(dispatch)=>{
        header_info().then(Response => {
            let {id,email,login}=Response.data.data
            if (Response.data.resultCode === 0) {
                dispatch(set_auth_user_data(id, email, login))
            }
        })
    }
} 

export default Auth_reducer