import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import Dialogs_item from './Dialogs_item/Dialogs_item';

const Message = (props) => {
    return (
        <div className={s.message}>
            <div className={s.img}></div>
            <p>{props.message}</p>
        </div>
    )
}

let dialogs=[
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Oleg'},
    {id: 3, name: 'Valera'},
    {id: 4, name: 'Olya'},
    {id: 5, name: 'Polya'},
    {id: 6, name: 'Sven'},
]

let Dialogs_Element = dialogs.map(
    d => <Dialogs_item name={d.name} id={d.id} />
)

let messages=[
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you'},
    {id: 3, message: 'Welcom'},
    {id: 4, message: 'NOO'},
    {id: 5, message: 'Between'},
    {id: 6, message: 'My name is?'},
]

let Messages_Element = messages.map(
    m=> <Message message={m.message}/>
)

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                <h2>Dialogs</h2>
                <ul>
                    {Dialogs_Element}
                </ul>
            </div>
            <div className={s.Messages}>
                {Messages_Element}
            </div>
        </div>
    )
}

export default Dialogs;
