import React from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';

let map_state_to_props=(state)=>{
    return{
        friends:state.navbar.navbar_friends
    }
}

let map_dispatch_to_props=(dispatch)=>{
    return{

    }
}

const Navbar_cont = connect(map_state_to_props,map_dispatch_to_props)(Navbar)
export default Navbar_cont 
