import axios from 'axios'
import React from 'react'
import User from './User/User'

class Users extends React.Component {

  constructor (props) {
    super(props)

    if (this.props.users.length < 1) axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${(this.props.users.length + 10) / 10}`).then(Response => {
      this.props.set_users(Response.data.items)
    })
  }


  render() {
    return (
      <div>
        {/* <button onClick={this.get_users}>Get Users</button> */}
        {this.props.users.map(u => <User key={u.id} u={u} unfollow={this.props.unfollow} follow={this.props.follow} />)}
      </div>
    )
  }
}

export default Users