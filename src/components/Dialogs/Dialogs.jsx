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

let Dialogs_Data=[
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Oleg'},
    {id: 3, name: 'Valera'},
    {id: 4, name: 'Olya'},
    {id: 5, name: 'Polya'},
    {id: 6, name: 'Sven'},
]

let Messages_Data=[
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you'},
    {id: 3, message: 'Welcom'},
    {id: 4, message: 'NOO'},
    {id: 5, message: 'Between'},
    {id: 6, message: 'My name is?'},
]

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                <h2>Dialogs</h2>
                <ul>
                    <Dialogs_item name={Dialogs_Data[0].name} id={Dialogs_Data[0].id} />
                    <Dialogs_item name={Dialogs_Data[1].name} id={Dialogs_Data[1].id} />
                    <Dialogs_item name={Dialogs_Data[2].name} id={Dialogs_Data[2].id} />
                    <Dialogs_item name={Dialogs_Data[3].name} id={Dialogs_Data[3].id} />
                    <Dialogs_item name={Dialogs_Data[4].name} id={Dialogs_Data[4].id} />
                    <Dialogs_item name={Dialogs_Data[5].name} id={Dialogs_Data[5].id} />
                </ul>
            </div>
            <div className={s.messages}>
                <Message message={Messages_Data[0].message}/>
                <Message message={Messages_Data[1].message}/>
                <Message message={Messages_Data[2].message}/>
                <Message message={Messages_Data[3].message}/>
                <Message message={Messages_Data[4].message}/>
                <Message message={Messages_Data[5].message}/>
            </div>
        </div>
    )
}

export default Dialogs;
