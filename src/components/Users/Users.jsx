import axios, { Axios } from 'axios'
import React from 'react'
import User from './User/User'
import s from './Users.module.css'

class Users extends React.Component {

  componentDidMount(){
    if (this.props.users.length < 1) axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.current_page}&count=${this.props.page_size}`).then(Response => {
      this.props.set_users(Response.data.items)
      this.props.set_total_count_user(Response.data.totalCount)

    })
  }

  on_page_changed=(el)=>{
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${el}&count=${this.props.page_size}`).then(response=>{this.props.set_users(response.data.items)})
    this.props.set_current_page(el)
  }

  render() {
    let pages_count= Math.ceil(this.props.total_count/this.props.page_size) 
    let pages=[]
    for(let i=1;i<=pages_count;i++){
        pages.push(i)
    }
    return (
      <div>
        {pages.map(el=><span key={el} className={this.props.current_page===el ? s.active : ""} onClick={()=>{this.on_page_changed(el)}}>{el}</span>)}
        {this.props.users.map(u => <User key={u.id} u={u} unfollow={this.props.unfollow} follow={this.props.follow} />)}
      </div>
    )
  }
}

export default Users