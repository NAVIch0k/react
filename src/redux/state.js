import { render_tree } from "../render"

let state = {
  profile_page: {
    posts: [
      { id: 1, message: 'How are you?', likes_count: 122 },
      { id: 2, message: 'My project', likes_count: 233 },
      { id: 3, message: 'Hello World', likes_count: 92 }
    ],
    new_post_text:'lol_hello'
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
    ]
  },
  navbar:{
    navbar_friends:[
      {name:"Leon"},
      {name:"Kesadi"},
      {name:"Adam"}
    ]
  }
}

export let add_post=()=>{
  let new_post={
    id:4,
    message: state.profile_page.new_post_text,
    likes_count:100
  }
  state.profile_page.posts.push(new_post)
  state.profile_page.new_post_text=''
  render_tree(state)
}

export let update_new_post_text=(new_text)=>{
  state.profile_page.new_post_text = new_text
  render_tree(state)
}

export default state;
