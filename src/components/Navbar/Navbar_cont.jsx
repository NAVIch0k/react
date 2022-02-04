import React from 'react';
import { connect } from 'react-redux';
import { rename_AC } from '../../redux/Navbar_reducer';
import Navbar from './Navbar';

let map_state_to_props=(state)=>{
    return{
        friends:state.navbar.navbar_friends,
        but:state.navbar.but
    }
}

let map_dispatch_to_props=(dispatch)=>{
    return{
        butclick:(text)=>{
            dispatch(rename_AC(text))
        }
    }
}

const Navbar_cont = connect(map_state_to_props,map_dispatch_to_props)(Navbar)
export default Navbar_cont 
