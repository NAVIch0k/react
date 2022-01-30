const ADD_POST='ADD-POST'
const UPDATE_NEW_POST_TEXT='UPDATE-NEW-POST-TEXT'
const ADD_MESSAGE='ADD-MESSAGE'
const UPDATE_NEW_MESSAGE='UPDATE-NEW-MESSAGE'
let store = {

  _state: {
    profile_page: {
      posts: [
        { id: 1, message: 'How are you?', likes_count: 122 },
        { id: 2, message: 'My project', likes_count: 233 },
        { id: 3, message: 'Hello World', likes_count: 92 }
      ],
      new_post_text: 'lol_hello'
    },
    dialogs_page: {
      dialogs: [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Oleg' },
        { id: 3, name: 'Valera' },
        { id: 4, name: 'Olya' },
        { id: 5, name: 'Polya' },
        { id: 6, name: 'Sven' },
      ],
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you' },
        { id: 3, message: 'Welcom' },
        { id: 4, message: 'NOO' },
        { id: 5, message: 'Between' },
        { id: 6, message: 'My name is?' },
      ],
      new_message: "hello ivan"
    },
    navbar: {
      navbar_friends: [
        { name: "Leon" },
        { name: "Kesadi" },
        { name: "Adam" }
      ]
    }
  },

  _render_tree() {
    console.log("non render")
  },

  get_state() {
    return this._state;
  },

  subscribe(observer) {
    this._render_tree = observer
  },

  // add_post() {
  //   let new_post = {
  //     id: 4,
  //     message: this._state.profile_page.new_post_text,
  //     likes_count: 100
  //   }
  //   this._state.profile_page.posts.push(new_post)
  //   this._state.profile_page.new_post_text = ''
  //   this._render_tree(this._state)
  // },

  // update_new_post_text(new_text) {
  //   this._state.profile_page.new_post_text = new_text
  //   this._render_tree(this._state)
  // },

  // add_message() {
  //   let message = {
  //     id: 7,
  //     message: this._state.dialogs_page.new_message
  //   }
  //   this._state.dialogs_page.messages.push(message)
  //   this._state.dialogs_page.new_message = ""
  //   this._render_tree(this._state)
  // },

  // update_new_message(new_text) {
  //   this._state.dialogs_page.new_message = new_text
  //   this._render_tree(this._state)
  // },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let new_post = {
        id: 4,
        message: this._state.profile_page.new_post_text,
        likes_count: 100
      }
      this._state.profile_page.posts.push(new_post)
      this._state.profile_page.new_post_text = ''
      this._render_tree(this._state)
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profile_page.new_post_text = action.new_text
      this._render_tree(this._state)
    } else if (action.type === ADD_MESSAGE) {
      let message = {
        id: 7,
        message: this._state.dialogs_page.new_message
      }
      this._state.dialogs_page.messages.push(message)
      this._state.dialogs_page.new_message = ""
      this._render_tree(this._state)
    } else if (action.type === UPDATE_NEW_MESSAGE) {
      this._state.dialogs_page.new_message = action.new_message
      this._render_tree(this._state)
    }
  }
  
}

export const on_post_change_creater=(text)=>({
      type:UPDATE_NEW_POST_TEXT,
      new_text: text
})

export const add_post_creater=()=>({type:ADD_POST})

export const add_message_creater=()=>({type:ADD_MESSAGE})

export const on_message_change_creater=(text)=>({
      type:UPDATE_NEW_MESSAGE,
      new_message: text
})

export default store;
