import React from 'react';
import { connect } from 'react-redux';
import { add_message_creater, on_message_change_creater } from '../../redux/Dialog_reducer';
import Dialogs from './Dialogs';

let map_state_to_props=(state)=>{
    return{
        dialog_page:state.dialog_page,
        is_auth:state.auth.is_auth
    }
}

let map_dispatch_to_props=(dispatch)=>{
    return{
        add_message:()=>{
            dispatch(add_message_creater())
        },
        update_message:(e)=>{
            dispatch(on_message_change_creater(e))
        }
    }
}

const Dialogs_cont = connect(map_state_to_props,map_dispatch_to_props)(Dialogs)

export default Dialogs_cont;
