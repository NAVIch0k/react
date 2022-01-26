import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
const Navbar = (props) => {

    let nav_name=props.state.navbar_friends.map(
        n => <p>{n.name}</p>
    )

    return (
        <nav className={s.nav}>
            <NavLink to='/profile' className={navData => (navData.isActive ? s.active : "")}>Profile</NavLink>
            <NavLink to='/dialogs' className={navData => (navData.isActive ? s.active : "")}>Messages</NavLink>
            <NavLink to='/news' className={navData => (navData.isActive ? s.active : "")}>News</NavLink>
            <NavLink to='/music' className={navData => (navData.isActive ? s.active : "")}>Music</NavLink>
            <NavLink to='/settings' className={navData => (navData.isActive ? s.active : "")}>Settings</NavLink>
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
