import React from 'react';
import s from './Dialogs.module.css';
import Dialogs_item from './Dialogs_item/Dialogs_item';
import Message from './Message/Message';

const Dialogs = (props) => {
    let Dialogs_Element = props.state.dialogs.map(
        d => <Dialogs_item name={d.name} id={d.id} />
    )

    let Messages_Element = props.state.messages.map(
        m => <Message message={m.message} />
    )
    let message = React.createRef()
    let add_message = () => {
        let text = message.current.value
        alert(text)
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
                <textarea ref={message}></textarea>
                <button onClick={add_message}>add</button>
            </div>
        </div>
    )
}

export default Dialogs;
