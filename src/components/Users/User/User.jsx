import React from 'react';
import s from './User.module.css'
import user_photo from './../../../img/logo.png'

// class User extends React.Component {
//     render() {
//         return (
//             <div>
//                 <span>
//                     <div>
//                         <img src={this.props.u.photos.small != null ? this.props.u.photos.small : user_photo} className={s.photo} />
//                     </div>
//                     <div>
//                         {this.props.u.followed ? <button onClick={() => { this.props.unfollow(this.props.u.id) }}>unfollow</button> : <button onClick={() => { this.props.follow(this.props.u.id) }}>follow</button>}
//                     </div>
//                 </span>
//                 <span>
//                     <span>
//                         <div>{this.props.u.name}</div>
//                         <div>{this.props.u.status}</div>
//                     </span>
//                     <span>
//                         <div>{"u.location.country"}</div>
//                         <div>{"u.location.city"}</div>
//                     </span>
//                 </span>
//             </div>
//         )
//     }
// }
const User=(props)=>{
    return (
        <div>
            <span>
                <div>
                    <img src={props.u.photos.small != null ? props.u.photos.small : user_photo} className={s.photo} />
                </div>
                <div>
                    {props.u.followed ? <button onClick={() => { props.unfollow(props.u.id) }}>unfollow</button> : <button onClick={() => { props.follow(props.u.id) }}>follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{props.u.name}</div>
                    <div>{props.u.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
            </span>
        </div>
    )
}

export default User