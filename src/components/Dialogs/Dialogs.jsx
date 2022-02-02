import React from 'react';
import s from './Dialogs.module.css';
import Dialogs_item from './Dialogs_item/Dialogs_item';
import Message from './Message/Message';

const Dialogs = (props) => {
    let Dialogs_Element = props.dialog_page.dialogs.map(
        d => <Dialogs_item name={d.name} key={d.id} id={d.id} />
    )

    let Messages_Element = props.dialog_page.messages.map(
        m => <Message message={m.message} key={m.id} />
    )

    let add_message = () => {
        props.add_message()
    }
    let on_message_change=(e)=>{
        let text= e.target.value
        props.update_message(text)
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
