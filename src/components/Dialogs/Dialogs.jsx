import React from 'react';
import { add_message_creater, on_message_change_creater } from '../../redux/Dialog_reducer';
import s from './Dialogs.module.css';
import Dialogs_item from './Dialogs_item/Dialogs_item';
import Message from './Message/Message';

const Dialogs = (props) => {
    console.log(props)
    let Dialogs_Element = props.dialog_page.dialogs.map(
        d => <Dialogs_item name={d.name} id={d.id} />
    )

    let Messages_Element = props.dialog_page.messages.map(
        m => <Message message={m.message} />
    )

    let add_message = () => {
        props.dispatch(add_message_creater())
    }
    let on_message_change=(e)=>{
        let message=e.target.value
        props.dispatch(on_message_change_creater(message))
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                <h2>Dialogs</h2>
                <ul>
                    {Dialogs_Element}
                </ul>
            </div>
            <div className={s.messages}>
                {Messages_Element}
                <textarea onChange={on_message_change} value={props.dialog_page.new_message}></textarea>
                <button onClick={add_message}>add</button>
            </div>
        </div>
    )
}

export default Dialogs;
