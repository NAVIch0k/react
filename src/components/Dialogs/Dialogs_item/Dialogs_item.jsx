import React from 'react';
import s from './Dialogs_item.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs_item = (props) => {
    return (
        <NavLink activeClassName={s.active} to={"/dialogs/"+props.id} className={s.dialog}><li>{props.name}</li></NavLink>
    )
}

export default Dialogs_item;