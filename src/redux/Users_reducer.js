const FOLLOW='FOLLOW'
const UNFOLLOW='UNFOLLOW'
const SET_USERS ='SET_USERS'
const CURRENT_PAGE='CURRENT_PAGE'
const TOTAL_COUNT_USER='TOTAL_COUNT_USER'

let initial_state = {
    users: [ ],
    page_size:5,
    total_count_user:0,
    current_page:1
}


const Users_reducer = (state=initial_state, action) => {
    switch (action.type) {  
        case FOLLOW:
            return{
                ...state,
                users:state.users.map(u=>{
                    if(u.id==action.user_id){
                        return{...u,followed:true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return{
                ...state,
                users: state.users.map(u=>{
                    if(u.id==action.user_id){
                        return{...u,followed:false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return{...state,users:action.users}
        case CURRENT_PAGE:
            return{...state,current_page:action.current_page} 
        case TOTAL_COUNT_USER:
            return{...state,total_count_user:action.count}
        default:
            return state
    }
}

export const follow_AC=(user_id)=>({type:FOLLOW,user_id})

export const unfollow_AC=(user_id)=>({type:UNFOLLOW,user_id})

export const set_users_AC=(users)=>({type:SET_USERS,users})

export const set_current_page_AC=(current_page)=>({type:CURRENT_PAGE,current_page})

export const set_total_count_user_AC=(count)=>({type:TOTAL_COUNT_USER,count})

export default Users_reducer