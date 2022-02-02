const ADD_POST='ADD-POST'
const UPDATE_NEW_POST_TEXT='UPDATE-NEW-POST-TEXT'
let initial_state = {
    posts: [
        { id: 1, message: 'How are you?', likes_count: 122 },
        { id: 2, message: 'My project', likes_count: 233 },
        { id: 3, message: 'Hello World', likes_count: 92 }
    ],
    new_post_text: 'lol_hello'
}


const Profile_reducer = (state=initial_state, action) => {
    switch (action.type) {
        case ADD_POST:{
            let new_post = {
                id: 4,
                message: state.new_post_text,
                likes_count: 100
            }
            let new_state={...state}
            new_state.posts = [...state.posts]
            new_state.posts.push(new_post)
            new_state.new_post_text = ''
            return new_state;
        }
        case UPDATE_NEW_POST_TEXT:{
            let new_state={...state}
            new_state.new_post_text = action.new_text
            return new_state
        }    
        default:
            return state
    }
}

export const on_post_change_creater=(text)=>({
    type:UPDATE_NEW_POST_TEXT,
    new_text: text
})

export const add_post_creater=()=>({type:ADD_POST})

export default Profile_reducer