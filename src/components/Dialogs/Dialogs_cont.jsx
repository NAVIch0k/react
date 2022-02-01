import React from 'react';
import { add_message_creater, on_message_change_creater } from '../../redux/Dialog_reducer';
import store_context from '../../Store_context';
import Dialogs from './Dialogs';

const Dialogs_cont = (props) => {
    return (
        <store_context.Consumer>
            {
                (store) => {
                    let add_message = () => {
                        store.dispatch(add_message_creater())
                    }
                    let on_message_change = (e) => {
                        store.dispatch(on_message_change_creater(e))
                    }
                    let state = store.getState()
                    return (
                        <Dialogs dialog_page={state.dialog_page} add_message={add_message} update_message={on_message_change} />
                    )
                }
            }
        </store_context.Consumer>
    )
}

export default Dialogs_cont;
