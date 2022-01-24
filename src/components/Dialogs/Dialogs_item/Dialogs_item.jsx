import React from 'react';
import s from './Dialogs_item.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs_item = (props) => {
    return (
        <NavLink to={"/dialogs/"+props.id} className={navData => (navData.isActive ? s.dialog + ' ' + s.active : s.dialog)}><li>{props.name}</li></NavLink>
    )
}

export default Dialogs_item;