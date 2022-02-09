import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { follow_AC, set_current_page_AC, set_total_count_user_AC, set_users_AC, unfollow_AC } from '../../redux/Users_reducer';
import Users from './Users';

class Users_api_component extends React.Component {

    componentDidMount() {
      if (this.props.users.length < 1) axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.current_page}&count=${this.props.page_size}`).then(Response => {
        this.props.set_users(Response.data.items)
        this.props.set_total_count_user(Response.data.totalCount)
  
      })
    }
  
    on_page_changed = (el) => {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${el}&count=${this.props.page_size}`).then(response => { this.props.set_users(response.data.items) })
      this.props.set_current_page(el)
    }
  
    render() {
      return <Users
        current_page={this.props.current_page}
        total_count={this.props.total_count}
        page_size={this.props.page_size}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        on_page_changed={this.on_page_changed}
      />
    }
  }

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



export default  connect(map_state_to_props, map_dispatch_to_props)(Users_api_component)
 