import React from 'react';
import s from './Message.module.css';

const Message = (props) => {
    return (
        <div className={s.message}>
            <div className={s.img}></div>
            <p>{props.message}</p>
        </div>
    )
}

export default Message;
