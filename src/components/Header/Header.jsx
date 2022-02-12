import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.header_img}></div>
            <div className={s.login_block}>
                {props.is_auth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}
export default Header;