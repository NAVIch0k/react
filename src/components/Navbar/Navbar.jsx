import React from 'react';
import s from './Navbar.module.css';
const Navbar = () => {
    return (
        <nav className={s.nav}>
            <a className={s.item} href='/profile'>Profile</a>
            <a className={s.item} href='/dialogs'>Messages</a>
            <a className={s.item} href='/#'>News</a>
            <a className={s.item} href='/#'>Music</a>
            <a className={s.item} href='/#'>Settings</a>
        </nav>
    )
}
export default Navbar;
