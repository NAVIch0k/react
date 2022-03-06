import { Profile_API } from "../API/API"

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initial_state = {
    posts: [
        { id: 1, message: 'How are you?', likes_count: 122 },
        { id: 2, message: 'My project', likes_count: 233 },
        { id: 3, message: 'Hello World', likes_count: 92 }
    ],
    profile: null,
    status: ""
}


const Profile_reducer = (state = initial_state, action) => {
    switch (action.type) {
        case ADD_POST: {
            let new_post = { id: 4, message: action.profile_post_text, likes_count: 100 }
            return { ...state, posts: [...state.posts, new_post] }
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        case SET_STATUS: {
            return { ...state, status: action.status }
        }
        default:
            return state
    }
}

//AC
export const add_post_creater = (profile_post_text) => ({ type: ADD_POST,profile_post_text })
export const set_user_profile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const set_status = (status) => ({ type: SET_STATUS, status })
//thunk
export const get_user_profile = (id) => {
    return (dispatch) => {
        Profile_API.profile_info(id).then(Response => {
            dispatch(set_user_profile(Response))
        })
    }
}
export const get_user_status = (id) => {
    return (dispatch) => {
        Profile_API.get_status(id).then(Response => {
            dispatch(set_status(Response.data))
        })
    }
}
export const update_user_status = (status) => {
    return (dispatch) => {
        Profile_API.update_status(status).then(Response => {
            if(Response.data.resultCode===0){
                dispatch(set_status(status))
            } 
        })
    }
}
export default Profile_reducer