import reportWebVitals from './reportWebVitals';
import state, { subscribe } from './redux/state'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { add_message, add_post, update_new_message, update_new_post_text } from './redux/state';
import { BrowserRouter} from 'react-router-dom';

let render_tree=(state)=>{
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state={state} profile_post={add_post} update_new_post_text={update_new_post_text} dialogs_massage={add_message} update_new_message={update_new_message}/>
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  );
}

render_tree(state)

subscribe(render_tree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
