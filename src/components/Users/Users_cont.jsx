import React from 'react';
import { connect } from 'react-redux';
import { follow_AC, set_users_AC, unfollow_AC } from '../../redux/Users_reducer';
import Users from './Users';

let map_state_to_props = (state) => {
    return {
        users: state.user_page.users
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
        }
    }
}
//49 time 38

const Users_cont = connect(map_state_to_props, map_dispatch_to_props)(Users)

export default Users_cont