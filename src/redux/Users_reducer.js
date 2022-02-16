const FOLLOW='FOLLOW'
const UNFOLLOW='UNFOLLOW'
const SET_USERS ='SET_USERS'
const CURRENT_PAGE='CURRENT_PAGE'
const TOTAL_COUNT_USER='TOTAL_COUNT_USER'
const TOGGLE_IS_FETCHING='TOGGLE_IS_FETCHING'
const TOGGLE_IN_PROGRESS='TOGGLE_IN_PROGRESS'

let initial_state = {
    users: [ ],
    page_size:5,
    total_count_user:0,
    current_page:1,
    is_fetching:false,
    following_in_progress:[]
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
        case TOGGLE_IS_FETCHING:
            return{...state,is_fetching:action.is_fetching}
        case TOGGLE_IN_PROGRESS:
            return{...state,
                following_in_progress: action.is_following
                ?[...state.following_in_progress, action.id]
                :state.following_in_progress.filter(id=>id!=action.id)
            }
        default:
            return state
    }
}

export const follow=(user_id)=>({type:FOLLOW,user_id})

export const unfollow=(user_id)=>({type:UNFOLLOW,user_id})

export const set_users=(users)=>({type:SET_USERS,users})

export const set_current_page=(current_page)=>({type:CURRENT_PAGE,current_page})

export const set_total_count_user=(count)=>({type:TOTAL_COUNT_USER,count})

export const set_is_fetching=(is_fetching)=>({type:TOGGLE_IS_FETCHING,is_fetching})

export const set_is_following=(is_following,id)=>({type:TOGGLE_IN_PROGRESS,is_following,id})

export default Users_reducer