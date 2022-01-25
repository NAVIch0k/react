import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs=[
  {id: 1, name: 'Dima'},
  {id: 2, name: 'Oleg'},
  {id: 3, name: 'Valera'},
  {id: 4, name: 'Olya'},
  {id: 5, name: 'Polya'},
  {id: 6, name: 'Sven'},
]

let messages = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'How are you' },
  { id: 3, message: 'Welcom' },
  { id: 4, message: 'NOO' },
  { id: 5, message: 'Between' },
  { id: 6, message: 'My name is?' },
]

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
