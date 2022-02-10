const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
let initial_state = {
    posts: [
        { id: 1, message: 'How are you?', likes_count: 122 },
        { id: 2, message: 'My project', likes_count: 233 },
        { id: 3, message: 'Hello World', likes_count: 92 }
    ],
    new_post_text: 'lol_hello',
    profile:null
}


const Profile_reducer = (state = initial_state, action) => {
    switch (action.type) {
        case ADD_POST: {
            let new_post = { id: 4, message: state.new_post_text, likes_count: 100 }
            return { ...state, new_post_text: '', posts: [...state.posts, new_post] }
        }
        case UPDATE_NEW_POST_TEXT: {
            return { ...state, new_post_text: action.new_text }
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        default:
            return state
    }
}

export const on_post_change_creater = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    new_text: text
})

export const add_post_creater = () => ({ type: ADD_POST })
export const set_user_profile = (profile) => ({ type: SET_USER_PROFILE, profile })

export default Profile_reducer