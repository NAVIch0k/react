import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { add_message, add_post, update_new_message, update_new_post_text } from './redux/state';
import { BrowserRouter} from 'react-router-dom';

export let render_tree=(state)=>{
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state={state} profile_post={add_post} update_new_post_text={update_new_post_text} dialogs_massage={add_message} update_new_message={update_new_message}/>
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  );
}