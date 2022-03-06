import React from 'react';
import { Field, reduxForm } from 'redux-form'
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

    let add_new_message=(value)=>{
        props.add_message(value.textarea)
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
                <Message_form_redux onSubmit={add_new_message}/>
            </div>
        </div>
    )
}

const Message_form = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name={'textarea'} ></Field>
            <button>add</button>
        </form>
    )
}

const Message_form_redux=reduxForm({form:'add_message'})(Message_form)

export default Dialogs;
