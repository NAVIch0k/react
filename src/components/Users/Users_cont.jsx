import React from 'react';
import { connect } from 'react-redux';
import { follow_AC, set_current_page_AC, set_total_count_user_AC, set_users_AC, unfollow_AC } from '../../redux/Users_reducer';
import Users from './Users';

let map_state_to_props = (state) => {
    return {
        users: state.user_page.users,
        page_size: state.user_page.page_size,
        total_count:state.user_page.total_count_user,
        current_page:state.user_page.current_page
    }
}

let map_dispatch_to_props = (dispatch) => {
    return{
        follow:(user_id)=>{
            dispatch(follow_AC(user_id))
        },
        unfollow:(user_id)=>{
            dispatch(unfollow_AC(user_id))
        },
        set_users:(users)=>{
            dispatch(set_users_AC(users))
        },
        set_current_page:(num_page)=>{
            dispatch(set_current_page_AC(num_page))
        },
        set_total_count_user:(count)=>{
            dispatch(set_total_count_user_AC(count))
        }
    }
}


const Users_cont = connect(map_state_to_props, map_dispatch_to_props)(Users)

export default Users_cont