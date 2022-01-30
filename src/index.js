import reportWebVitals from './reportWebVitals';
import store from './redux/state'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter} from 'react-router-dom';

let render_tree=(state)=>{
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state={state} add_message={store.add_message.bind(store)} update_new_message={store.update_new_message.bind(store)} add_post={store.add_post.bind(store)} update_new_post_text={store.update_new_post_text.bind(store)}/>
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  );
}

render_tree(store.get_state())

store.subscribe(render_tree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
