import React from 'react';
import { connect } from 'react-redux';
import { add_message_creater, on_message_change_creater } from '../../redux/Dialog_reducer';
import { WithAuthRedirect } from '../HOC/WithAuthRedirecr';
import Dialogs from './Dialogs';

let map_state_to_props=(state)=>{
    return{
        dialog_page:state.dialog_page
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

let AuthRedirectComponent=WithAuthRedirect(Dialogs)

const Dialogs_cont = connect(map_state_to_props,map_dispatch_to_props)(AuthRedirectComponent)

export default Dialogs_cont;
