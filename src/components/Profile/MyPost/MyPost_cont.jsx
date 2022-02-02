import React from 'react';
import { connect } from 'react-redux';
import { add_post_creater, on_post_change_creater } from '../../../redux/Profile_reducer';
import MyPost from './MyPost';

let map_state_to_props=(state)=>{
    return{
        new_post:state.profile_page.new_post_text,
        posts:state.profile_page.posts
    }
}

let map_dispatch_to_props=(dispatch)=>{
    return{
        update_new_post:(text)=>{
            dispatch(on_post_change_creater(text))
        },
        add_post:()=>{
            dispatch(add_post_creater())
        }
    }
}

const My_post_cont=connect(map_state_to_props,map_dispatch_to_props)(MyPost)
export default My_post_cont;
