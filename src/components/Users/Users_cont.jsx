import React from 'react';
import { connect } from 'react-redux';
import Users from './users';

let map_state_to_props = (state) => {
    return {
        users: state.user_page.users
    }
}

let map_dispatch_to_props = (dispatch) => {
    return{
        follow:{},
        unfollow:{},
        set_users:{}
    }
}
//49 time 38

const Users_cont = connect(map_state_to_props, map_dispatch_to_props)(Users)

export default Users_cont