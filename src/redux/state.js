let render_tree=()=>{
  
}

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
    ],
    new_message:"hello ivan"
  },
  navbar:{
    navbar_friends:[
      {name:"Leon"},
      {name:"Kesadi"},
      {name:"Adam"}
    ]
  }
}

export const add_post=()=>{
  let new_post={
    id:4,
    message: state.profile_page.new_post_text,
    likes_count:100
  }
  state.profile_page.posts.push(new_post)
  state.profile_page.new_post_text=''
  render_tree(state)
}

export const update_new_post_text=(new_text)=>{
  state.profile_page.new_post_text = new_text
  render_tree(state)
}

export const add_message=()=>{
  let message={
    id:7,
    message: state.dialogs_page.new_message
  }
  state.dialogs_page.messages.push(message)
  state.dialogs_page.new_message=""
  render_tree(state)
}

export const update_new_message=(new_text)=>{
  state.dialogs_page.new_message=new_text
  render_tree(state)
}

export const subscribe =(observer)=>{
  render_tree=observer
}

export default state;
