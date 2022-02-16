import React from 'react';
import { connect } from 'react-redux';
import { Users_API } from '../../API/API';
import { set_is_following, follow, set_current_page, set_is_fetching, set_total_count_user, set_users, unfollow } from '../../redux/Users_reducer';
import Preloader from '../Common/Preloader/Preloader';
import Users from './Users';

class Users_api_component extends React.Component {

  componentDidMount() {
    this.props.set_is_fetching(true)
    Users_API.get_users(this.props.current_page,this.props.page_size).then(Response => {
      this.props.set_users(Response.items)
      this.props.set_total_count_user(Response.totalCount)
      this.props.set_is_fetching(false)
    })
  }

  on_page_changed = (el) => {
    this.props.set_is_fetching(true)
    Users_API.get_users(el,this.props.page_size).then(response => {
      this.props.set_is_fetching(false)
      this.props.set_users(response.items) 
    })
    this.props.set_current_page(el)
  }

  render() {
    return <>
      {this.props.is_fetching ? <Preloader/> : null}
      <Users
        current_page={this.props.current_page}
        total_count={this.props.total_count}
        page_size={this.props.page_size}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        on_page_changed={this.on_page_changed}
        is_following={this.props.set_is_following}
        following_in_progress={this.props.following_in_progress}
      />
    </>
  }
}

let map_state_to_props = (state) => {
  return {
    users: state.user_page.users,
    page_size: state.user_page.page_size,
    total_count: state.user_page.total_count_user,
    current_page: state.user_page.current_page,
    is_fetching: state.user_page.is_fetching,
    following_in_progress: state.user_page.following_in_progress
  }
}



export default connect(map_state_to_props, 
  {
    follow,
    unfollow,
    set_users,
    set_current_page,
    set_total_count_user,
    set_is_fetching,
    set_is_following
  }
  )(Users_api_component)
