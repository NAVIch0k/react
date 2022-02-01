import React from 'react';
import { add_post_creater, on_post_change_creater } from '../../../redux/Profile_reducer';
import store_context from '../../../Store_context';
import MyPost from './MyPost';

const MyPost_cont = (props) => {
    return (
        <store_context.Consumer>
            {
                (store) => {
                    let state = store.getState()

                    let update_new_post = (text) => {
                        store.dispatch(on_post_change_creater(text))
                    }

                    let add_post = () => {
                        store.dispatch(add_post_creater())
                    }
                    
                    return (
                        <MyPost new_post={state.profile_page.new_post_text} posts={state.profile_page.posts} update_new_post={update_new_post} add_post={add_post} />
                    )
                }
            }
        </store_context.Consumer>

    )
}
export default MyPost_cont;
