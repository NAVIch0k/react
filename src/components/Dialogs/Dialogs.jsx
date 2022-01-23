import React from 'react';
import s from './Dialogs.module.css';

const Dialogs =()=>{
    return(
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                <h2>Dialogs</h2>
                <ul>
                    <li className={s.dialog+" "+s.active}>Dima</li>
                    <li className={s.dialog}>Oleg</li>
                    <li className={s.dialog}>Valera</li>
                    <li className={s.dialog}>Ola</li>
                    <li className={s.dialog}>Polya</li>
                    <li className={s.dialog}>Sven</li>
                </ul>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    <div className={s.img}></div>
                    <p>Hi</p>
                </div>
                <div className={s.message}>
                <div className={s.img}></div>
                    <p>How are you</p> 
                </div>
                <div className={s.message}>
                    <div className={s.img}></div>
                    <p>Welcom</p> 
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
