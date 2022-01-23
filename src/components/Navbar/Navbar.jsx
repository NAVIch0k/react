import React from 'react';
import s from './Navbar.module.css';
const Navbar = () => {
    return (
        <nav className={s.nav}>
            <a className={s.item} href='/profile'>Profile</a>
            <a className={s.item} href='/dialogs'>Messages</a>
            <a className={s.item} href='/news'>News</a>
            <a className={s.item} href='/music'>Music</a>
            <a className={s.item} href='/settings'>Settings</a>
        </nav>
    )
}
export default Navbar;
