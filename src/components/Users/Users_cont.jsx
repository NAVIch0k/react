import React from 'react';
import { connect } from 'react-redux'; 
import { compose } from 'redux';
import { set_current_page, get_users, fol_unfol } from '../../redux/Users_reducer';
import { get_current_page, get_following_in_progress, get_is_fetching, get_page_size, get_total_count_user, get_users_sel } from '../../redux/Users_selector';
import Preloader from '../Common/Preloader/Preloader';
import { WithAuthRedirect } from '../HOC/WithAuthRedirecr';
import Users from './Users';

class Users_api_component extends React.Component {
  componentDidMount() {
    this.props.get_users(this.props.current_page,this.props.page_size)
  }

  on_page_changed = (el) => {
    this.props.get_users(el,this.props.page_size)
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
        on_page_changed={this.on_page_changed}
        following_in_progress={this.props.following_in_progress}
        fol_unfol={this.props.fol_unfol}
      />
    </>
  }
}



// let map_state_to_props = (state) => {
//   return {
//     users: state.user_page.users,
//     page_size: state.user_page.page_size,
//     total_count: state.user_page.total_count_user,
//     current_page: state.user_page.current_page,
//     is_fetching: state.user_page.is_fetching,
//     following_in_progress: state.user_page.following_in_progress
//   }
// }

let map_state_to_props = (state) => {
  return {
    users: get_users_sel(state),
    page_size: get_page_size(state),
    total_count: get_total_count_user(state),
    current_page: get_current_page(state),
    is_fetching: get_is_fetching(state),
    following_in_progress: get_following_in_progress(state)
  }
}



export default compose(
    WithAuthRedirect,
    connect(map_state_to_props, 
      {
        set_current_page,
        get_users,
        fol_unfol
      }
      )
  )(Users_api_component)
