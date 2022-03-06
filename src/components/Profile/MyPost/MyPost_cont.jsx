import React from 'react';
import { connect } from 'react-redux';
import { add_post_creater} from '../../../redux/Profile_reducer';
import MyPost from './MyPost';

let map_state_to_props=(state)=>{
    return{
        posts:state.profile_page.posts
    }
}

let map_dispatch_to_props=(dispatch)=>{
    return{
        add_post:(profile_post_text)=>{
            dispatch(add_post_creater(profile_post_text))
        }
    }
}

const My_post_cont=connect(map_state_to_props,map_dispatch_to_props)(MyPost)
export default My_post_cont;
