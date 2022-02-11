import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
const Navbar = (props) => {
    let nav_name=props.friends.map(
        n => <p>{n.name}</p>
    )
    return (
        <nav className={s.nav}>
            <NavLink activeClassName={s.active} to='/profile'>Profile</NavLink>
            <NavLink activeClassName={s.active} to='/dialogs' className={({isActive}) => isActive ? s.active : ""}>Messages</NavLink>
            <NavLink activeClassName={s.active} to='/news' className={({isActive}) => isActive ? s.active : ""}>News</NavLink>
            <NavLink activeClassName={s.active} to='/music' className={({isActive}) => isActive ? s.active : ""}>Music</NavLink>
            <NavLink activeClassName={s.active} to='/settings' className={({isActive}) => isActive ? s.active : ""}>Settings</NavLink>
            <NavLink activeClassName={s.active} to='/users' className={({isActive}) => isActive ? s.active : ""}>Users</NavLink>
            <h3>Friends</h3>
            <div className={s.nav_friends}>
                <div className={s.nav_friend}>
                    <div className={s.nav_friend_img}></div>
                    {nav_name[0]}
                </div>
                <div className={s.nav_friend}>
                    <div className={s.nav_friend_img}></div>
                    {nav_name[1]}
                </div>
                <div className={s.nav_friend}>
                    <div className={s.nav_friend_img}></div>
                    {nav_name[2]}
                </div>
            </div>

        </nav>
    )
}
export default Navbar;
