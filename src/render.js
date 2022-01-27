import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { add_post } from './redux/state';
import { BrowserRouter} from 'react-router-dom';

export let render_tree=(state)=>{
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state={state} profile_post={add_post} />
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  );
}