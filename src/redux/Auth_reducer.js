import { header_info } from "../API/API"

const SET_USER_DATA = 'SET_USER_DATA'

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
        default:
            return state
    }
}


export const set_auth_user_data=(id,email,login)=>({type:SET_USER_DATA,data:{id,email,login}})

export const header_info_API=()=>{
    return(dispatch)=>{
        header_info().then(Response => {
            debugger
            let {id,email,login}=Response.data.data
            if (Response.data.resultCode === 0) {
                dispatch(set_auth_user_data(id, email, login))
            }
        })
    }
} 

export default Auth_reducer