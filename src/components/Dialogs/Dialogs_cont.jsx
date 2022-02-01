import React from 'react';
import { add_message_creater, on_message_change_creater } from '../../redux/Dialog_reducer';
import store from '../../redux/redux_store';
import Dialogs from './Dialogs';

const Dialogs_cont = (props) => {

    let state=props.store.getState()

    let add_message = () => {
        props.store.dispatch(add_message_creater())
    }
    let on_message_change=(e)=>{
        props.store.dispatch(on_message_change_creater(e))
    }
    return (
        <Dialogs dialog_page={state.dialog_page} add_message={add_message} update_message={on_message_change}/>
    )
}

export default Dialogs_cont;
