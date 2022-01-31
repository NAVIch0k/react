import Dialog_reducer from "./Dialog_reducer"
import Navbar_reducer from "./Navbar_reducer"
import Profile_reducer from "./Profile_reducer"

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

  dispatch(action) {
    this._state.profile_page=Profile_reducer(this._state.profile_page, action)
    this._state.dialogs_page=Dialog_reducer(this._state.dialogs_page, action)
    this._state.navbar=Navbar_reducer(this._state.navbar, action)
    this._render_tree(this._state)
  }
  
}

export default store;
